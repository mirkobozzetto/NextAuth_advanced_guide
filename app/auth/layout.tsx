import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav className="bg-red-600 text-white">Navbar Login</nav>
      {children}{" "}
    </div>
  );
};

export default AuthLayout;
