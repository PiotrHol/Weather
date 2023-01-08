import React, { useState } from "react";
import "./navigation.scss";
import { NavLogo } from "../NavLogo/NavLogo";
import { NavMenu } from "../NavMenu/NavMenu";

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navigation">
      <NavLogo setIsShowMenu={() => setShowMenu((prev) => !prev)} />
      <NavMenu className="navigation__menu" isShowMenu={showMenu} />
    </div>
  );
};
