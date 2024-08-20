'use client'

import { IBM_Plex_Sans_Arabic as GFont, Montserrat } from "next/font/google";

import Button from "../button/button";
import Link from "next/link";
import { links } from "./title";
import styles from "./header.module.css"
import { useState } from "react";

// import { Montserrat } from "next/font/google" 


const logoFont= GFont({
  subsets:['arabic'],
  weight:['400'],
})
function Header() {

  const [activeLinkId, setActiveLinkId] = useState(1);

  const handleActiveLinkId = (id:number) => {
    setActiveLinkId(id);
  };
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link 
            key={link.id} 
            href={link.url} 
            className= {`${activeLinkId === link.id ? styles.active : 'text-nav_color font-semibold text-base leading-9 text-light-gray ml-12'}`}
            onClick={() => handleActiveLinkId(link.id)}

            >
            {link.title}
          </Link>
        ))}
       
      </div>
    </div>
  );
}

export default Header;

// import Link from "next/link";
// import { links } from "./title";
// function Header() {
//   return (
    
//     <header className="header">
//       {links.map((link) => (
//         <Link key={link.id} href={link.url}>
//           {link.title}
//         </Link>
//       ))}
//     </header>
//   );
// }

// export default Header;
