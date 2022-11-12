import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import SideMenu from "./SideMenu";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <h1>FK</h1>
        </div>
        <ul className={styles.pageLinks}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">Projects</Link>
        </ul>

        <div className={styles.icons}>
          <FaInstagram size="40px" />
          <FaLinkedin size="40px" />
        </div>
      </div>
      <SideMenu />
    </div>
  );
};

export default Header;
