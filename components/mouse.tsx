"use client";
import React, { useState, useEffect } from "react";

const Mouse: React.FC = () => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-30">
      <div
        className="w-[40px] h-[40px] absolute bg-[#1d88bd5e] rounded-full"
        style={{
          transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
        }}
      ></div>
    </div>
  );
};

export default Mouse;
