import styles from './navigation.module.css';
import Link from "next/link";
import {FC} from "react";

const NavbarLink: FC<{linkTo: string, title: string}> = ({linkTo, title}) => {
    return (
        <Link href={linkTo} className={styles.navbarLink}>
            <span>
                {title}
            </span>
        </Link>
    );
}

export default NavbarLink;