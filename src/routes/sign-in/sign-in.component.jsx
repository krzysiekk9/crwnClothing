import {
  signInWithGooglePopup,
  createUserDocumentFormAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFormAuth(user);
  };
  return (
    <div>
      <div>Sign in</div>
      <button onClick={logGoogleUser}>Sign With Google </button>
    </div>
  );
};

export default SignIn;
