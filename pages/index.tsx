import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";

import ProjectsContainer from "../components/ProjectsContainer";
import ProjectsCard from "../components/ProjectsCard";
import Header from "../components/Header";
import HeaderBackground from "../components/HeaderBackground";
import Game from "../components/Game";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [sectionName, setSectionName] = useState<string | null>("#");
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.querySelectorAll("section").forEach((section) => {
        if (section.offsetTop <= window.pageYOffset) {
          const sectionID =
            section.getAttribute("id") == "showcase"
              ? "#"
              : `#${section.getAttribute("id")}`;
          setSectionName(sectionID);
        }
      });
    });
  }, []);

  const downloadGames = () => {
    router.push("/games");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Riverblood</title>
        <meta name="description" content="Riverblood Landing Page" />
        <link rel="icon" href="/riverblood.svg" />
      </Head>
      <Header sectionName={sectionName} />
      <HeaderBackground />

      <section className={styles.showcase} id="showcase">
        <div className={styles.showcaseText}>
          <h1>
            <span>welcome to</span> river blood studio official website
          </h1>
          <p>download-play-enjoy our games at our new game launcher now</p>
          <div
            onClick={downloadGames}
            className={styles.launcherDownloadButton}
          >
            Download <FontAwesomeIcon icon={faWindows} />
          </div>
        </div>
        <div className={styles.showcaseImages}>
          <Image src="/pc.svg" height={600} width={600} />
        </div>
      </section>

      <section className={styles.ourProjects} id="ourprojects">
        <div className={styles.projectsContainer}>
          <h2 className={styles.projectsContainerTitle}>Our Projects</h2>
          <ProjectsContainer>
            {[...Array(12)].map((i, j) => (
              <ProjectsCard key={j} GameImage={`/Games/${j + 1}.png`} />
            ))}
          </ProjectsContainer>
        </div>
      </section>

      <section className={styles.about} id="about">
        <div className={styles.images}>
          <Image
            className={styles.largeImage}
            src="/about/studio.png"
            height={718}
            width={996.35}
          />
          <div className={styles.smallImagesContainer}>
            <Image
              className={styles.smallImage}
              src="/about/game1.png"
              height={493.5}
              width={441.61}
            />
            <Image
              className={styles.smallImage}
              src="/about/game2.png"
              height={550}
              width={502}
            />
          </div>
        </div>
        <div className={styles.aboutText}>
          <h2 className={styles.mainTitle}>about</h2>
          <p className={styles.aboutStudio}>
            River Blood Studio, we are studio specializing in the gaming
            industry and development,And the first of its kind in the region, at
            Middle East was established in 2018, Our studio has the expertise of
            programmers and designers, where we created the first game، GRAND OF
            EL-MATARYA ®, It's one of our first small works, and We have
            projects under development, one of them called "Last Drop: The
            Beginning", we planning to compete in Game of the year on E3 (GOTY),
            and we aspire to compete with advanced gaming studios، We have a lot
            of projects to do, and we have our vision. With the dedication of
            our team , our studio will become one of the most powerful gaming
            studios.
          </p>
          <div className={styles.mobileImages}>
            <Image
              className={styles.largeImage}
              src="/about/studio.png"
              height={718}
              width={996.35}
            />
            <div className={styles.smallImagesContainer}>
              <Image
                className={styles.smallImage}
                src="/about/game1.png"
                height={493.5}
                width={441.61}
              />
              <Image
                className={styles.smallImage}
                src="/about/game2.png"
                height={550}
                width={502}
              />
            </div>
          </div>
          <h3 className={styles.secondaryTitle}>Games</h3>
          <Game
            title="GRAND OF EL-Matarya"
            description="small game, In cairo about deliver drugs...and killing the Abu Motta Enemy.. This project has made in just 1 month from 1 developer!"
          />
          <Game
            title="LAST DROP: THE BEGINNING"
            description="The player controls 'Zain Muhammad', as he travels to Palestine in the year 2037 after Palestine was devastated by a nuclear radiation outbreak that has been genetically developed to strengthen our genes as human beings, but Excessive use of this drug cause the lack of hours of sleep, which caused this. Zombies, in order to escort his team to Palestine to solve this mystery. It deals with the player defending himself against zombie-like humans, as well as hostile people, by using weapons and stealth, upgrading his equipment at that. The player can use weapons and medicine on his way."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
