export const parseAuthError = (err) => {
  switch (err.code) {
    case 'auth/email-already-exists':
    case 'auth/email-already-in-use':
      return ['email', 'Цей емаіл вже зайнятий'];

    case 'auth/invalid-email':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return ['root', 'Невірний емаіл або пароль'];

    default:
      console.error(err);
      return ['root', 'Щось не так, спробуйте пізніше...'];
  }
};
