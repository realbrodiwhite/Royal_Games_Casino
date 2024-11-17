"use client";
import React from "react";
import RoyalGamesGlobalStylesheet from "../components/royal-games-global-stylesheet";
import GameTypesLink from "../components/game-types-link";
import RoyalGamesLeaderboardLink from "../leaderboard/royal-games-leaderboard-link";
import CrdsExchangeLink from "../links/crds-exchange-link";

const RoyalGamesResponsiveHeader: React.FC = () => {
  const [isSearchVisible, setIsSearchVisible] = React.useState<boolean>(false);
  const [isDropdownVisible, setIsDropdownVisible] = React.useState<boolean>(false);
  // Assuming useSession is defined somewhere
  const { data: session, status } = useSession();

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const handleNewFunction = async () => {
    try {
      const response = await fetch("/api/new-function", { method: "POST" });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error calling new function:", error);
    }
  };

  return (
    <>
      <RoyalGamesGlobalStylesheet />
      <header
        className="bg-[#293044] px-4 py-2 flex items-center justify-between header-container"
        role="banner"
      >
        <div className="flex items-center">
          <img
            src="https://ucarecdn.com/35b300c3-a162-413f-af5d-5ab6256750be/-/format/auto/"
            alt="Royal Games Logo"
            className="h-10 w-auto mr-4 header-logo"
            style={{ maxWidth: "150px", height: "40px", objectFit: "contain" }}
            loading="lazy"
          />
          <nav
            className="hidden md:flex space-x-4 header-nav"
            role="navigation"
          >
            <ul className="flex space-x-4">
              <li>
                <GameTypesLink href="/" />
              </li>
              <li>
                <RoyalGamesLeaderboardLink href="/leaderboard" />
              </li>
              <li>
                <CrdsExchangeLink href="/crds-exchange" />
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            className="text-white text-4xl p-4"
            aria-label="Toggle search"
          >
            <i className="fas fa-search"></i>
          </button>
          {isSearchVisible && (
            <input
              type="text"
              placeholder="Search..."
              className="bg -[#ffffff] text-black p-2 rounded"
              aria-label="Search input"
            />
          )}
          <button
            onClick={toggleDropdown}
            className="text-white text-4xl p-4"
            aria-label="Toggle dropdown"
          >
            <i className="fas fa-bars"></i>
          </button>
          {isDropdownVisible && (
            <div className="absolute bg-white text-black shadow-lg rounded mt-2">
              <ul className="flex flex-col">
                <li>
                  <GameTypesLink href="/" />
                </li>
                <li>
                  <RoyalGamesLeaderboardLink href="/leaderboard" />
                </li>
                <li>
                  <CrdsExchangeLink href="/crds-exchange" />
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default RoyalGamesResponsiveHeader;
