import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/GamesListHeader.module.css";

interface Props {
  selectedGame: string;
  setSelectedGame: React.Dispatch<React.SetStateAction<string>>;
}

interface GameIconProps {
  GameName: string;
  GameImage: string;
  isActive: boolean;
  setSelectedGame: React.Dispatch<React.SetStateAction<string>>;
}

function GamesListHeader({ selectedGame, setSelectedGame }: Props) {
  return (
    <header className={styles.GameListHeader}>
      <div className={styles.GameListHeaderLogo}>
        <Link href="/">
          <Image src="/homeIcon.svg" height={50} width={50} />
        </Link>
      </div>
      <div className={styles.GamesList}>
        <GameIcon
          GameName="GOMI"
          GameImage="/Games/GOMIMainLogo.png"
          isActive={selectedGame == "GOMI" ? true : false}
          setSelectedGame={setSelectedGame}
        />
        <GameIcon
          GameName="GOMII"
          GameImage="/Games/GOMIIMainLogo.png"
          isActive={selectedGame == "GOMII" ? true : false}
          setSelectedGame={setSelectedGame}
        />
      </div>
    </header>
  );
}

function GameIcon({
  GameName,
  GameImage,
  isActive,
  setSelectedGame,
}: GameIconProps) {
  const imageSize = isActive ? 110 : 80;

  const changeGame = () => setSelectedGame(GameName);

  return (
    <div
      onClick={changeGame}
      className={`${styles.game} ${isActive ? styles.activeGame : ""}`}
    >
      <Image src={GameImage} height={imageSize} width={imageSize} />
    </div>
  );
}

export default GamesListHeader;
