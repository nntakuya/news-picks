import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from 'classnames';
import styles from './index.module.css';

const Header: FC = () => {
    return (
        <header className={styles.content}>
            <Link href="/" className={cn(styles.logo)}>
                <Image
                    src="/images/common/logo.png"
                    width={104}
                    height={23}
                    alt="logo"
                />
            </Link>
        </header>
    );
};

export default Header;
