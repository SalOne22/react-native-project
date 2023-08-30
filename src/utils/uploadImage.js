import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '~/config';

export const uploadImage = async (path, uri) => {
  //? https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const fileName = uri.slice(uri.lastIndexOf('/'));

  const fileRef = ref(storage, `${path}/${fileName}`);
  await uploadBytes(fileRef, blob);

  blob.close();

  return await getDownloadURL(fileRef);
};
