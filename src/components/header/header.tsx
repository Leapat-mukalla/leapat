'use client';

import Link from 'next/link';
import { links } from './title';
import styles from './header.module.css';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import useScroll from '@/hooks/use-scroll';

function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const { y } = useScroll();

  const addBackground = y > 80;

  return (
    <div
      className={cn(styles.container, {
        'z-50 !h-16 bg-primary shadow-sm': addBackground,
      })}
    >
      <div className={styles.links}>
        {links.map((link, index) => {
          const isActive = !index
            ? isHome
            : pathname === link.url || pathname.startsWith(link.url);

          return (
            <Link
              key={index}
              href={link.url}
              scroll={true}
              className={cn(
                isActive && styles.active,
                'text-light-gray ml-12 text-base font-semibold leading-9 text-nav_color',
              )}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
