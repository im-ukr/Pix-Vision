import { findUser } from './findUser';
import { fireDb } from './firebaseConfig';

export const addUser = async ({ displayName, email, photoURL, uid }) => {
  const doc = await fireDb.collection('users').add({
    displayName: displayName || email.split('@')[0],
    email,
    UID: uid,
    photoURL: photoURL || 'https://firebasestorage.googleapis.com/v0/b/photo-sight.appspot.com/o/default_user.png?alt=media&token=93e215bf-4b99-4dde-9127-21eefb65df16',
  });

  const snapshot = await doc.get();
  return snapshot.data();
};

export const addSocialUser = async userData => {
  const isUser = await findUser(userData.uid);
  return isUser.data ? isUser : await addUser(userData);
};
