import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import GamesListHeader from "../../components/GamesListHeader";

import styles from "../../styles/GamesList.module.css";

function Games() {
  const router = useRouter();
  const [selectedGame, setSelectedGame] = useState("GOMI");

  useEffect(() => {
    const gamesPage = document.getElementById("gamesPage");

    if (selectedGame === "GOMI") {
      gamesPage!.style.background =
        'url("/Games/GamesBanner.png"), url("/Games/GOMIBackground.png")';
    } else {
      gamesPage!.style.background =
        'url("/Games/GamesBanner.png"), url("/Games/GOMIIBackground.png")';
    }

    gamesPage!.style.backgroundPosition = "center";
    gamesPage!.style.backgroundSize = "cover";
  }, [selectedGame]);

  const downloadGame = (GameName: string) => {
    router.push(`/games/${GameName}`);
  };

  return (
    <div className={styles.container} id="gamesPage">
      <Head>
        <title>Riverblood | Games</title>
        <meta name="description" content="Riverblood Games Page" />
        <link rel="icon" href="/riverblood.svg" />
      </Head>
      <GamesListHeader
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />
      {selectedGame == "GOMI" ? (
        <div className={styles.GameDescription}>
          <h1>
            <span>GRAND OF</span>
            <span>EL-Matarya</span>
          </h1>
          <p>
            take the adventure of Egyptian criminals in El-Matareya, +16 game in
            Egypt made by a single developer in just 1 month.
          </p>
          <div
            onClick={() => downloadGame("GrandOfMataryaI")}
            className={styles.downloadButton}
          >
            Download
          </div>
        </div>
      ) : (
        <div className={styles.GameDescription}>
          <Image
            src="/Games/GOMIILogo.png"
            height={85}
            width={253}
            alt="Grand Of Matarya II Logo"
          />
          <p>
            Part II of Grand Of El-Matareya, with new title {'"Will Of Crime"'},
            Every piece of this game made by 1 person except the VOs.
          </p>
          <div
            onClick={() => downloadGame("GrandOfMataryaII")}
            className={styles.downloadButton}
          >
            Download
          </div>
        </div>
      )}
    </div>
  );
}

export default Games;
