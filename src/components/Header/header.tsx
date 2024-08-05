import Link from "next/link";
import styles from "./header.module.css"
import { links } from "./title";
import Button from "../Button/button";

// import { Montserrat } from "next/font/google" 

import { IBM_Plex_Sans_Arabic as GFont, Montserrat } from "next/font/google";

const logoFont= GFont({
  subsets:['arabic'],
  weight:['400'],
})
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="text-white font-semibold text-base leading-9 text-light-gray">
            {link.title}
          </Link>
        ))}
        <Button />
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
