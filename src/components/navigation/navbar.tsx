import styles from './navigation.module.css';
import Logo from '../../../public/musicFinderLogo.png';
import Image from "next/image";
import SearchBar from "@/components/navigation/searchBar";
import NavbarLink from "@/components/navigation/navbarLink";
import Link from "next/link";
import SpotifyLogin from "@/components/authentication/spotifyLogin";

const Navbar = () => {
    return (
        <>
            <nav className={styles.navbarContainer}>
                <Link href='/'>
                    <Image src={Logo} alt='Music Finder' className={styles.navbarLogo}/>
                </Link>
                <div className={styles.navbarRightSide}>
                    <NavbarLink linkTo={'/categories'} title={'Categories'}/>
                    <SearchBar/>
                    <SpotifyLogin/>
                </div>

            </nav>
            <div className={styles.navbarGradient}> </div>
        </>
    )
}

export default Navbar;