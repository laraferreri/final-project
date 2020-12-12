import React from "react";

function Header({ loggedIn, LogoutFunction }) {
  return (
    <header className="Header">
      <nav>
        {loggedIn ? (
          <>
            <a href="/">User Profile</a>
            <a onClick={() => LogoutFunction()}> Logout </a>
          </>
        ) : (
          <>
            <a href="/Login">Login</a>
            <a href="/CreateAccount">Create Account</a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
