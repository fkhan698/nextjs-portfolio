import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import SideMenu from "./SideMenu";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <h1>Logo</h1>
        </div>
        <ul className={styles.pageLinks}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">Home</Link>
        </ul>

        <div className={styles.icons}>
          <Link href="/blog">Blog</Link>
          <Link href="/">Home</Link>
        </div>
      </div>
      <SideMenu />
    </div>
  );
};

export default Header;
