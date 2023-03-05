import Image from "next/image";
import EnvImg from "/public/environment.png"
import React from "react";
import styles from "./Aboutus.module.css"


function Aboutus(){
   return(
       <>
          <div className={styles.page}>
            {/* <nav className={styles.nav}>
                <div className={styles.navbar}>
                <Link href="/" passHref>
                <span className={styles.navbar}>Logo</span>
                </Link>
                <Link href="/" passHref>
                <span className={styles.home}>HOME</span>
                </Link>

                </div>
                <div className={styles.signup}>
                    <button className={styles.btn} type="submit">SignUp</button>
                </div>
            </nav> */}
            <div className={styles.container}>
              <div className={styles.grid1}>
                <div className={styles.content1}>
                <Image className={styles.image} alt="" src={EnvImg} />
                </div>
                <div className={styles.content2}>
                   <div className={styles.text}>
                    <h1 className={styles.color} >

                        <u>
                        OUR MISSION</u></h1>

                    <ul >
                    <div className={styles.gap1}>

<span className={styles.color} ><b>
&#9733; How  can everyone contribute in conserving our environment without wasting time and money??</b></span></div>
<li className={styles.gap1}type="square"> No need to worry our app will do it for you &nbsp; <b>&#8658;</b></li>
<li className={styles.gap1}>
Ambition for creating this app is to make people aware about our precious environment and the ways to reduce <b>CARBON FOOTPRINT </b>.</li>
<li className={styles.gap2}>
Let users know about the various eco-friendly alternatives and easy access to those alternatives.</li>
<li className={styles.gap2}>
Easier for startups to access the materials required  and will help them scale up their business at a faster rate.</li>
<li className={styles.gap2}>
Informing people about incentives taken by different companies and this will advertise environmentally sustainable products.</li>
<li className={styles.gap2}>
Will introduce a sense of support and appreciation to those working to reduce the impact of human usage on the environment.</li>
</ul>
                 </div>
                </div>
              </div>



            </div>
        </div>

       </>
   )
}

export default Aboutus;
