import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.description}>
          <nav className={styles.mainnav}>
            <ul>
                <li>
                    <Link href="/"> Home </Link>
                </li>
                <li>
                    <Link href="/about" > About </Link>
                </li>
                <li>
                    <Link href="/blog"> Blog </Link>
                </li>
                <li>
                    <Link href="/contact"> Contact </Link>
                </li>
            </ul>
        </nav>
    </div> 
  )
}


export default Navbar