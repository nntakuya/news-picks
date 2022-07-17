import { FC, ReactElement, ReactNode } from "react";
import Image from 'next/image';
import Header from "@/components/Header";
import styles from "./index.module.css";

const Layout: FC<{children: ReactNode}> = ({ children }): ReactElement => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
        </footer>
        </div>
    );
};

export default Layout;
