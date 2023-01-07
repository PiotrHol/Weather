import React, { useState } from "react";
import "./navigation.scss";
import { NavLogo } from "../NavLogo/NavLogo";

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navigation">
      <NavLogo setIsShowMenu={() => setShowMenu((prev) => !prev)} />
    </div>
  );
};
