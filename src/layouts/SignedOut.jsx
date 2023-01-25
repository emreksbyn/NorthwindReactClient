import React from "react";
import { Button, Menu } from "semantic-ui-react";

// export default function SignedOut(props) {
export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu style={{ marginTop: "0.5em" }}>
        {/* <Button attached="left" color="green" onClick={props.signIn}> */}
        <Button attached="left" color="green" onClick={signIn}>
          Login
        </Button>
        <Button attached="right" color="blue">
          Register
        </Button>
      </Menu>
    </div>
  );
}
