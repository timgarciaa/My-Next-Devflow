import React from "react";
import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      Home Page
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default HomePage;
