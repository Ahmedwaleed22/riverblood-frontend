import React, { useContext } from "react";
import Head from "next/head";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

import Header from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";

import styles from "../../styles/Games.module.css";

function Home() {
  const { token } = useContext(UserContext);

  const downloadGame = async () => {
    try {
      const { data }: any = await axios.post(
        "/download",
        {
          game_name: "GrandOfMataryaI",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.open(data.download_link, "_blank");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.GOMIDownloadPage}>
      <Head>
        <title>Riverblood | Grand Of Mataraya I</title>
        <meta name="description" content="Riverblood Grand Of Mataraya I" />
        <link rel="icon" href="/riverblood.svg" />
      </Head>
      <Header background={false} color="#6469FF" />
      <div className={styles.GOMIContainer}>
        <div
          className={`${styles.GOMIContainerSide} ${styles.GOMIAbsoluteSide}`}
        >
          <h1 className={styles.GOMIGameTitle}>GRAND OF EL-MATAREYA</h1>
          <p className={styles.GOMIGameDescription}>
            This is a GTA-type of game, Made in a single week by 1 developer. as
            a challenge, The game in Egypt about Drugs Dealer and Bank Robberies
            in Egypt is vision.
          </p>
          <div
            onClick={downloadGame}
            className={`${styles.GOMIStyledButton} ${styles.GOMIDownloadButton}`}
          >
            <span className={styles.GOMIStyledButtonText}>Download</span>
            <FontAwesomeIcon icon={faWindows} />
          </div>
        </div>
        <div className={styles.GOMICharacterContainer}>
          <Image
            src="/Games/GOMICharacter.png"
            className={styles.GOMICharacterImage}
            width={750}
            height={820}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
