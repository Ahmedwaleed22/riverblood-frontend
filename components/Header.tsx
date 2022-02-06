import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faUserAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Header.module.css";
import { UserContext } from "../contexts/UserContext";

const LogoSize = 40;

interface Props {
  sectionName?: any;
  mobileView?: boolean;
  background?: boolean;
  color?: string;
}

function Header({ sectionName, mobileView, background, color }: Props) {
  const [openedGamesDropDown, setOpenGamesDropDown] = useState(false);
  const [accountDropDown, setAccountDropDown] = useState(false);
  const router = useRouter();
  const { user } = useContext(UserContext);

  const toSection = (section: string) => {
    const selectedSection = document.querySelector<HTMLElement>(section);

    window.scrollTo({
      top: selectedSection?.offsetTop,
      behavior: "smooth",
    });
  };

  const toggleGamesDropDown = () => setOpenGamesDropDown(!openedGamesDropDown);

  const toggleAccountDropDown = () => setAccountDropDown(!accountDropDown);

  useEffect(() => {
    if (color) {
      document
        .getElementById("nav-links")
        ?.querySelectorAll("li")
        .forEach((el) => {
          el.style.color = color;
        });
    }
  }, []);

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav} ${
          background == false ? "" : styles.navBackground
        }`}
      >
        <Image src="/riverblood.svg" height={LogoSize} width={LogoSize} />
        <ul className={styles.headerLinks} id="nav-links">
          {router.pathname === "/" ? (
            <>
              <li className={sectionName == "#" ? styles.activeHeaderLink : ""}>
                <a onClick={() => toSection("#showcase")}>home</a>
              </li>
              <li
                className={
                  sectionName == "#ourprojects" ? styles.activeHeaderLink : ""
                }
              >
                <a onClick={() => toSection("#ourprojects")}>our vision</a>
              </li>
              <li
                className={
                  sectionName == "#about" ? styles.activeHeaderLink : ""
                }
              >
                <a onClick={() => toSection("#about")}>about</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/#ourprojects">our vision</Link>
              </li>
              <li>
                <Link href="/#about">about</Link>
              </li>
            </>
          )}
          <li>
            <a className={styles.dropDownLink}>
              <span
                onClick={toggleGamesDropDown}
                className={styles.dropDownButtonText}
              >
                games
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
              <div
                className={`${styles.dropDownMenu} ${
                  styles.gamesDropDownMenu
                } ${openedGamesDropDown ? styles.openedDropDown : ""}`}
              >
                <ul>
                  <li>
                    <Link href="/games/GrandOfMataryaI">
                      Grand Of Matarya I
                    </Link>
                  </li>
                  <li>
                    <Link href="/games/GrandOfMataryaII">
                      Grand Of Matarya II
                    </Link>
                  </li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
        <div className={styles.accountButton}>
          <span
            onClick={toggleAccountDropDown}
            className={styles.accountButtonText}
            style={
              color
                ? {
                    backgroundColor: color,
                  }
                : {}
            }
          >
            {user ? user.username : "Account"}
            <FontAwesomeIcon icon={faUserAlt} />
          </span>
          <div
            className={`${styles.dropDownMenu} ${
              accountDropDown ? styles.openedDropDown : ""
            }`}
          >
            <ul>
              {user ? (
                <li>
                  <Link href="/logout">Logout</Link>
                </li>
              ) : (
                <li>
                  <Link href="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
