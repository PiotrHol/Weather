import React, { useEffect, useState } from "react";
import "./tooltip.scss";

export const Tooltip = ({ arrowDirection, tooltipText }) => {
  const [arrowDirectionClass, setArrowDirectionClass] = useState("");

  useEffect(() => {
    switch (arrowDirection) {
      case "left":
        setArrowDirectionClass("tooltip__content--left");
        break;
      case "right":
        setArrowDirectionClass("tooltip__content--right");
        break;
      case "bottom":
        setArrowDirectionClass("tooltip__content--bottom");
        break;
      default:
        setArrowDirectionClass("tooltip__content--top");
        break;
    }
  }, []);

  return (
    <div className="tooltip">
      <div className={`tooltip__content ${arrowDirectionClass}`}>
        <span className="tooltip__text">{tooltipText}</span>
      </div>
    </div>
  );
};
