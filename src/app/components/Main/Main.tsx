"use client";

import styles from "./Main.module.scss";

import { useState } from "react";

import { BoxMessage } from "./BoxMessage/BoxMessage";

import List from "svgr/icon-list.svg";

export const Main = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isMessageOpen, setIsMessageOpen] = useState(false);
    const medium = 1100;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (email.length === 0) {
            setMessage("Can't be empty");
            return;
        }

        if (!re.test(email)) {
            setMessage("Valid email required");
            return;
        }

        setIsMessageOpen(true);
        setMessage("");
    };

    return (
        <main>
            {!isMessageOpen ? (
                <div className={styles.main_container}>
                    <div className={styles.main_img}>
                        <picture>
                            <source
                                media={`(min-width:${medium}px)`}
                                srcSet="./assets/illustration-sign-up-desktop.svg"
                            />

                            <img
                                src="./assets/illustration-sign-up-mobile.svg"
                                alt=""
                            />
                        </picture>
                    </div>
                    <div className={styles.main_info}>
                        <h1> Stay updated!</h1>
                        <p>
                            Join 60,000+ product managers receiving monthly
                            updates on:
                        </p>
                        <ul className={styles.main_list}>
                            <li className={styles.list_item}>
                                <List />
                                Product discovery and building what matters
                            </li>
                            <li className={styles.list_item}>
                                <List />
                                Measuring to ensure updates are a success
                            </li>
                            <li className={styles.list_item}>
                                <List />
                                And much more!
                            </li>
                        </ul>

                        <form
                            className={styles.main_form}
                            onSubmit={handleSubmit}
                        >
                            <div
                                className={`${styles.input_container} ${
                                    message && styles.error_message
                                }`}
                            >
                                {message && <p>{message}</p>}
                                <label htmlFor="email"> Email address</label>
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    value={email}
                                    placeholder=" email@company.com"
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                title="subscribe to newsletter"
                                className={styles.form_btn}
                            >
                                Subscribe to monthly newsletter
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <BoxMessage onOpenBoxMessage={() => setIsMessageOpen(false)} />
            )}
        </main>
    );
};
