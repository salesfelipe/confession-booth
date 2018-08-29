import PropTypes from 'prop-types'

export const profilePropTypes = PropTypes.shape({
  /** User's email */
  email: PropTypes.string.isRequired,
  /** User's aleatorie userName */
  userName: PropTypes.string.isRequired,
})

export const confessionPropTypes = PropTypes.shape({
  /** Database id */
  _id: PropTypes.string.isRequired,
  /** Created at */
  createdAt: PropTypes.object.isRequired,
  /** Confession's text */
  text: PropTypes.string.isRequired,
  /** Number of likes */
  likes: PropTypes.number.isRequired,
  /** Confession is liked by the author */
  isLiked: PropTypes.bool.isRequired,
  /** Confession's author */
  author: PropTypes.string,
})
