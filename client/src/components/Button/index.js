import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Button extends Component {
  handleClick = event => {
    const { disabled, onClick, isLoading } = this.props
    !disabled && !isLoading && onClick && onClick(event)
  }

  render() {
    const {
      size,
      variation,
      type,
      block,
      children,
      isLoading,
      icon,
    } = this.props

    const Tag = icon ? 'div' : 'button'

    const disabled = this.props.disabled || isLoading

    const isSmall = size === 'small'
    const isMedium = size === 'medium'
    const isLarge = size === 'large'

    const isPrimary = (variation === 'primary') && !disabled
    const isSecondary = (variation === 'secondary') && !disabled
    const isTertiary = (variation === 'tertiary') && !disabled

    const classes = classNames({
      'icon-button': icon,
      'dib': icon,
      'bn': true,
      'shadow-3': true,
      'pa2': isSmall && icon,
      'pa3': isMedium && icon,
      'pa4': isLarge && icon,
      'pv2': isSmall && !icon,
      'pv3': isMedium && !icon,
      'pv4': isLarge && !icon,
      'ph3': isSmall && !icon,
      'ph4': isMedium && !icon,
      'ph5': isLarge && !icon,
      'f6': isSmall,
      'f5': isMedium,
      'f4': isLarge,
      'bg-custom-blue': isPrimary,
      'custom-white': isPrimary || isTertiary,
      'bg-custom-gray': isSecondary,
      'custom-blue': isSecondary,
      'bg-custom-dark-gray': isTertiary,
      'w-100': block,
      'pointer': !disabled,
      'bg-light-gray': disabled,
      'b--light-gray': disabled,
      'gray': disabled,
    })

    return (
      <Tag onClick={this.handleClick} className={classes} type={type}>
        {isLoading ? (
          <FontAwesomeIcon icon="spinner" size="lg" spin />
        ) : (children)}
      </Tag>
    )
  }
}

Button.defaultProps = {
  size: 'medium',
  variation: 'primary',
  disabled: false,
  isLoading: false,
  icon: false,
}

Button.propTypes = {
  /** Button prominence type */
  variation: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** Button size  */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** (Button spec attribute) */
  type: PropTypes.string,
  /** If you are using just an Icon component inside, use this as true */
  icon: PropTypes.bool,
  /** Block style */
  block: PropTypes.bool,
  /** (Button spec attribute) */
  disabled: PropTypes.bool,
  /** Loading state */
  isLoading: PropTypes.bool,
  /** onClick event */
  onClick: PropTypes.func,
  /** Label of the Button */
  children: PropTypes.node.isRequired,
}
