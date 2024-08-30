import React from "react";
import Header from "./Header";
import { useState } from "react";

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null)
  const navigation = (isLoggedIn) => [
    { name: "Home", href: "/", current: true },
    { name: "Dashboard", href: "/dashboard", current: false },
    { name: "Links", href: "/links", current: false },
    ...(!isLoggedIn
      ? [
          { name: "Sign In", href: "/login", current: false },
          { name: "Sign Up", href: "/signup", current: false },
        ]
      : []),
  ];
  return (
    <div>
       <Header navigation={navigation} isLoggedIn={isLoggedIn} user={user}/> 
    </div>
  );
};
export default LandingPage;
