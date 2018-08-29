export const processConfessions = (list) => {
  let result = list

  if (list && !(list.length === 0 || typeof list[0].likes === 'number')) {
    result = list.map((item) => {
      item.createdAt = new Date(item.createdAt)
      item.likes = item.likes.length
      item.isLiked = item.likes > 0

      return item
    })
  }

  return result
}

