"use client";

import styles from "./page.module.scss";
import { Main } from "./components";

export default function Home() {
    return (
        <div className={styles.home_container}>
            <Main />
        </div>
    );
}
