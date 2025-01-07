import { ButtonProps } from "@/types";
import React from "react";


const Button: React.FC<ButtonProps> = ({
  text,
  width = "149px",
  height = "40px",
  bgColor = "#7AC52D",
  textColor = "#FFFFFF",
  overlay = true,
  overlayColor = "#AFE274",
  overlayOffset = { top: "0.5rem", left: "0.25rem" },
  onClick,
}) => {
  return (
    <div className="relative" style={{ width, height }}>
      {/* Main Button */}
      <button
        className="rounded-[10px] font-bold z-20 relative"
        style={{
          width,
          height,
          backgroundColor: bgColor,
          color: textColor,
        }}
        onClick={onClick}
      >
        {text}
      </button>

      {/* Shadow/Overlay Layer */}
      {overlay && (
        <div
          className="absolute rounded-[10px] border"
          style={{
            width,
            height,
            backgroundColor: overlayColor,
            top: overlayOffset.top,
            left: overlayOffset.left,
            zIndex: 10,
            borderColor: bgColor,
          }}
        ></div>
      )}
    </div>
  );
};

export default Button;
