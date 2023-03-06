import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import Carbonops from "/public/images/homePage/RECYCUP.png";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.footerLogo}`}>
       <Link href="/">
       <Image
       src={Carbonops}
                  alt="Social icons"
                  height={100}
                  width={280}
      />
       </Link>
        </div>
        <div className={`${styles.footerAbout}`}>
          <Link href="./aboutus"> ABOUT US </Link>
        </div>

      </div>
    </>
  );
}
