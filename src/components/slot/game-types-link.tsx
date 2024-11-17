"use client";
import React from "react";

interface GameTypesLinkProps {
  href: string;
}

const GameTypesLink: React.FC<GameTypesLinkProps> = ({ href }) => {
  return (
    <a
      href={href}
      className="text-white hover:text-[#ffcc00] transition-colors font-roboto inline-block"
    >
      Games
    </a>
  );
}

export default GameTypesLink;
