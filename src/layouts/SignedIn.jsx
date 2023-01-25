import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1674484533~exp=1674485133~hmac=2fa729fdf1a13de4315859621e01fd376eabbf801b550e2cd513bdbe7ecb46cb"
        />
        <Dropdown pointing="top left" text="Emre">
          <Dropdown.Menu>
            <Dropdown.Item text="Information" icon="info" />
            <Dropdown.Item onClick={signOut} text="Sign out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
