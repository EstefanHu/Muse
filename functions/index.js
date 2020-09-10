const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

// auth trigger (new user signup)
exports.newUserSignup = functions.auth.user().onCreate(user => {
  return admin.firestore().collection('users').doc(user.id).set({
    email: user.email,
    userName: user.userName
  })
})

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete(user => {
  const doc = admin.firestore().collection('users').doc(user.id)
  return doc.delete()
})