import { get, getDatabase, ref, set } from 'firebase/database'
import app from './firebase'

const db = getDatabase()

export const writeNumberOfLikes = (postName, numberOfLikes) => {
  set(ref(db, postName), {
    numberOfLikes: numberOfLikes
  })
}

export const retrieveNumberOfLikes = async postName => {
  const snapshot = await get(ref(db, postName))
  return snapshot.val()
}
