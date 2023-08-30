export const parseAuthError = (err) => {
  switch (err.code) {
    case 'auth/email-already-exists':
    case 'auth/email-already-in-use':
      return ['email', 'Цей емаіл вже зайнятий'];

    default:
      console.error(err);
      return ['root', 'Щось не так, спробуйте пізніше...'];
  }
};
