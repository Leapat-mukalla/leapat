import Link from "next/link";
import styles from "./header.module.css"
import { links } from "./title";
import Button from "../Button/button";

import { Montserrat } from "next/font/google" 
const logoFont= Montserrat({
  subsets:['latin'],
  weight:['400'],
})
function Header() {
  return (
    <div className={styles.container}>
      <Link  className={`${styles.logo} ${logoFont.className}`} href={"/"}>Leapat</Link>
    <div className={styles.links}>
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
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
