import React,{useState} from 'react'
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={
                    menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button"
                onClick={() =>setMenuOpen(!menuOpen)}/>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#About">ABOUT</a>
                    </li>
                    <li>
                        <a href="#Skills">SKILLS</a>
                    </li>
                    <li>
                        <a href="#Projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#Associations">ASSOCIATIONS</a>
                    </li>
                    <li>
                        <a href="#Contact">CONTACT</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}