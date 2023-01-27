import { get, getDatabase, push, ref, set } from 'firebase/database'
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
