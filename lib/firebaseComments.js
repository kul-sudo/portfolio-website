import { get, remove, getDatabase, push, ref, set } from 'firebase/database'
import app from './firebase'

const db = getDatabase()

export const writeComment = (postName, commentText, name, uid, photoURL) => {
  const commentListRef = ref(db, `${postName}/${uid}`)
  const newCommentRef = push(commentListRef)
  set(newCommentRef, {
    text: commentText,
    photoURL: photoURL,
    name: name
  }).then(() => {
      window.location.reload()
    })
}

export const retrieveComments = async postName => {
  const snapshot = await get(ref(db, postName))
  return snapshot.val()
}

export const deleteComment = async (postName, uid, itemName) => {
  remove(ref(db, `${postName}/${uid}/${itemName}`)).then(() => {
    window.location.reload()
  })
}

export const addReply = async (commentUid, postName, commentItem, replyText, name, uid, photoURL) => {
  const replyListRef = ref(db, `${postName}/${commentUid}/${commentItem}/replies/${uid}`)
  const newReplyRef = push(replyListRef)
  set(newReplyRef, {
    text: replyText,
    photoURL: photoURL,
    name: name
  }).then(() => {
      window.location.reload()
    })
}
