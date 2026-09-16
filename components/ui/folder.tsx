"use client";

import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type FolderProps = {
  color?: string;
  size?: number;
  items?: ReactNode[];
  className?: string;
};

const MAX_ITEMS = 3;

function darkenColor(hex: string, percent: number): string {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;

  if (color.length === 3) {
    color = color
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const num = Number.parseInt(color.slice(0, 6), 16);
  const r = Math.max(0, Math.min(255, Math.floor(((num >> 16) & 0xff) * (1 - percent))));
  const g = Math.max(0, Math.min(255, Math.floor(((num >> 8) & 0xff) * (1 - percent))));
  const b = Math.max(0, Math.min(255, Math.floor((num & 0xff) * (1 - percent))));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

export function Folder({
  color = "#ececec",
  size = 1,
  items = [],
  className = "",
}: FolderProps): ReactNode {
  const papers = items.slice(0, MAX_ITEMS);

  while (papers.length < MAX_ITEMS) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);
  const paper2 = darkenColor("#ffffff", 0.05);
  const paper3 = "#ffffff";

  const handleClick = (): void => {
    setOpen((prev) => !prev);
  };

  const folderStyle = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
    transform: open ? "translateY(-8px)" : undefined,
  } as CSSProperties;

  const getOpenTransform = (index: number): string => {
    if (index === 0) return "translate(-120%, -70%) rotate(-15deg)";
    if (index === 1) return "translate(10%, -70%) rotate(15deg)";
    return "translate(-50%, -100%) rotate(5deg)";
  };

  return (
    <div style={{ transform: `scale(${size})` }} className={className}>
      <div
        className={`group relative cursor-pointer transition-all duration-200 ease-in focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 ${
          open ? "" : "hover:-translate-y-2"
        }`}
        style={folderStyle}
        onClick={handleClick}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleClick();
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={open}
        aria-label={open ? "Close folder" : "Open folder"}
      >
        <div
          className="relative h-20 w-25 rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute bottom-[98%] left-0 z-0 h-2.5 w-7.5 rounded-tl-[5px] rounded-tr-[5px]"
            style={{ backgroundColor: folderBackColor }}
          />
          {papers.map((item, index) => {
            const sizeClasses = [
              "h-[80%] w-[70%]",
              open ? "h-[80%] w-[80%]" : "h-[70%] w-[80%]",
              open ? "h-[80%] w-[90%]" : "h-[60%] w-[90%]",
            ][index];
            const transform = open ? getOpenTransform(index) : undefined;

            return (
              <div
                key={index}
                className={`absolute bottom-[10%] left-1/2 z-20 overflow-hidden rounded-[10px] transition-all duration-300 ease-in-out ${
                  open ? "hover:scale-110" : "-translate-x-1/2 translate-y-[10%] group-hover:translate-y-0"
                } ${sizeClasses}`}
                style={{
                  ...(open ? { transform } : {}),
                  backgroundColor: index === 0 ? paper1 : index === 1 ? paper2 : paper3,
                }}
              >
                {item}
              </div>
            );
          })}
          <div
            className={`absolute z-30 h-full w-full origin-bottom rounded-[5px_10px_10px_10px] transition-all duration-300 ease-in-out ${
              open ? "[transform:skew(15deg)_scaleY(0.6)]" : "group-hover:[transform:skew(15deg)_scaleY(0.6)]"
            }`}
            style={{ backgroundColor: color }}
          />
          <div
            className={`absolute z-30 h-full w-full origin-bottom rounded-[5px_10px_10px_10px] transition-all duration-300 ease-in-out ${
              open ? "[transform:skew(-15deg)_scaleY(0.6)]" : "group-hover:[transform:skew(-15deg)_scaleY(0.6)]"
            }`}
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  );
}
