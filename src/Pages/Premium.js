import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';


const Premium = () => {
  return (
    <Authenticator>
    {({ signOut }) => (
      <div className="App">
        <h1>Hello Welcome to Navy Eval Writer, the NEW way to write your eval</h1>
        <h3>You have successfully registered! this is the premium content page</h3>
        <button onClick={signOut}>Sign out</button>
      </div>
    )}
    </Authenticator>
  );
};

export default Premium; 