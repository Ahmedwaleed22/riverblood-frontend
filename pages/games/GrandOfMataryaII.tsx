import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Head from "next/head";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

import Header from "../../components/Header";

import styles from "../../styles/Games.module.css";

function GrandOfMataryaI() {
  const { token } = useContext(UserContext);

  const downloadGame = async () => {
    try {
      const { data }: any = await axios.post(
        "/download",
        {
          game_name: "GrandOfMataryaII",
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
    <div className={styles.GOMIIDownloadPage}>
      <Head>
        <title>Riverblood | Grand Of Mataraya II</title>
        <meta name="description" content="Riverblood Grand Of Mataraya II" />
        <link rel="icon" href="/riverblood.svg" />
      </Head>
      <Header background={false} color="#F51D1D" />
      <div className={styles.GOMIIContainer}>
        <div className={styles.GOMIILogo}>
          <Image src="/Games/GOMIILogo.png" width={285.5} height={100} />
        </div>
        <h1 className={styles.GOMIITitle}>GRAND OF EL-Matareya II</h1>
        <p className={styles.GOMIIDescription}>
          Part II of grand of el-matareya, The game about bank heist in
          alexandaria.
        </p>
        <div className={styles.actions}>
          <div onClick={downloadGame} className={styles.GOMIIDownloadButton}>
            download
          </div>
          <div className={styles.GOMIITrailerButton}>
            <FontAwesomeIcon icon={faPlayCircle} />
            watch trailer
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrandOfMataryaI;
