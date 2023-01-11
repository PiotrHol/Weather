import React, { useEffect, useState } from "react";
import "./navigation.scss";
import { NavLogo } from "../NavLogo/NavLogo";
import { NavMenu } from "../NavMenu/NavMenu";

export const Navigation = ({ setShowSettings }) => {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowMenu(false), 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="navigation">
      <NavLogo setIsShowMenu={() => setShowMenu((prev) => !prev)} />
      <NavMenu
        className="navigation__menu"
        isShowMenu={showMenu}
        setIsShowMenu={(value) => setShowMenu(value)}
        setIsShowSettings={setShowSettings}
      />
    </div>
  );
};
