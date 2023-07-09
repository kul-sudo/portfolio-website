import { get, remove, getDatabase, push, ref, set } from 'firebase/database'
import './firebase'

const db = getDatabase()

export const writeComment = async (postName: string, commentText: string, name: string, uid: string, photoURL: string) => {
  const commentListRef = ref(db, `${postName}/${uid}`)
  const newCommentRef = push(commentListRef)
  
  await set(newCommentRef, {
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
  await remove(ref(db, `${postName}/${uid}/${itemName}`)).then(() => {
    window.location.reload()
  })
}

export const addReply = async (commentUid: string, postName: string, commentItem: string, replyText: string, name: string, uid: string, photoURL: string) => {
  const replyListRef = ref(db, `${postName}/${commentUid}/${commentItem}/replies/${uid}`)
  const newReplyRef = push(replyListRef)
  
  await set(newReplyRef, {
    text: replyText,
    photoURL: photoURL,
    name: name
  }).then(() => {
      window.location.reload()
    })
}

export const deleteReply = async (postName: string, commentUid: string, commentItem: string, replierUid: string, replyItem: string) => {
  await remove(ref(db, `${postName}/${commentUid}/${commentItem}/replies/${replierUid}/${replyItem}`)).then(() => {
    window.location.reload()
  })
}
