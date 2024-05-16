import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../component/sign-up-form/sign-up-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user);
    } catch (error) {
      console.error('Failed to sign in:', error);
      // You can add more specific error handling here based on the error.code
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google Popup</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
