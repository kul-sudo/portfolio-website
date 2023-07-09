import { get, remove, getDatabase, push, ref, set } from 'firebase/database'
import './firebase'

const db = getDatabase()

export const writeComment = (postName: string, commentText: string, name: string, uid: string, photoURL: string) => {
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

export const retrieveComments = async (postName: string) => {
  const snapshot = await get(ref(db, postName))
  return snapshot.val()
}

export const deleteComment = async (postName: string, uid: string, itemName: string) => {
  remove(ref(db, `${postName}/${uid}/${itemName}`)).then(() => {
    window.location.reload()
  })
}

export const addReply = async (commentUid: string, postName: string, commentItem: string, replyText: string, name: string, uid: string, photoURL: string) => {
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
