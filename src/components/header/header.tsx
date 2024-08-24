'use client'

import { IBM_Plex_Sans_Arabic as GFont, Montserrat } from "next/font/google";

import Button from "../button/button";
import Link from "next/link";
import { links } from "./title";
import styles from "./header.module.css"
import { useState } from "react";
import { cn } from '@/lib/utils';

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
    <div className={cn(styles.container)}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`${activeLinkId === link.id ? styles.active : 'text-light-gray ml-12 text-base font-semibold leading-9 text-nav_color'}`}
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
