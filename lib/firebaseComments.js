import { get, remove, getDatabase, push, ref, set } from 'firebase/database'
import app from './firebase'

const db = getDatabase()

export const writeComment = (postName, commentText, name, photoURL) => {
  const commentListRef = ref(db, `${postName}/${name}/comments`)
  const newCommentRef = push(commentListRef)
  set(newCommentRef, {
    text: commentText,
    photoURL: photoURL
  }).then(() => {
      window.location.reload()
    })
}

export const retrieveComments = async postName => {
  const snapshot = await get(ref(db, postName))
  return snapshot.val()
}

export const deleteComment = async (postName, userName, itemName) => {
  remove(ref(db, `${postName}/${userName}/comments/${itemName}`)).then(() => {
    window.location.reload()
  })
}
