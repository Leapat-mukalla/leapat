"use client"
import Link from "next/link";
import styles from "./header.module.css"
import { links } from "./title";
function Header() {
  return (
    <div className={styles.container}>
      <Link  className={styles.logo} href={"/"}>Leapat</Link>
    <div className={styles.links}>
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
          {link.title}
        </Link>
      ))}
      <button className={styles.logout} onClick={()=>{console.log("logout")}}>logout</button>
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
