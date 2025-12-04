"use client"
import styles from './Navbar.module.css';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { FaAlignJustify, FaXmark } from "react-icons/fa6";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [lift, setLift] = useState(false);
    const lastY = useRef(0);
    const stopTimer = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        lastY.current = window.scrollY;

        const onScroll = () => {
            const y = window.scrollY;
            const isScrollingUp = y < lastY.current;

            // ถ้าเลื่อนขึ้น -> ยก
            if (isScrollingUp) {
                setLift(true);
            } else {
                setLift(false); // เลื่อนลง -> กลับที่เดิมทันที
            }

            lastY.current = y;

            // ถ้าหยุดเลื่อนเกิน 120ms -> กลับที่เดิม
            if (stopTimer.current) clearTimeout(stopTimer.current);
            stopTimer.current = setTimeout(() => {
                setLift(false);
            }, 120);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (stopTimer.current) clearTimeout(stopTimer.current);
        };
    }, []);
    return (
        <header className={`${styles.header} ${lift ? styles.headerLift : ""}`}>
            <div className={styles.groupHeader}>
                <div className={`container ${styles.boxMainNav}`}>
                    <nav className={`${styles.mainnav} ${open ? styles.isOpen : ""}`}>
                        <div className={styles.boxLogo}>
                            <Link href="/" onClick={() => setOpen(false)}>
                                <Image
                                    src="/images/Logo.png"
                                    alt="logo nexcent"
                                    width={154}
                                    height={24}
                                    className={styles.logomain}
                                />
                            </Link>
                        </div>

                        <button
                            className={styles.hamburger}
                            onClick={() => setOpen((v) => !v)}
                        >
                            <FaAlignJustify className={`text-xl sm:text-2xl ${styles.iconHam}`} />
                        </button>

                        <div className={styles.navPanel}>
                            <button
                                className={`ml-auto p-3 ${styles.closeBtn ?? ""}`}
                                onClick={() => setOpen(false)}
                            >
                                <FaXmark className={`text-2xl ${styles.spinIcon}`} />
                            </button>

                            <div className={styles.boxLinkPage}>
                                <Link href="/" className={`${styles.listItemLink} active`} onClick={() => setOpen(false)}>Home</Link>
                                <Link href="/" className={styles.listItemLink} onClick={() => setOpen(false)}>Service</Link>
                                <Link href="/" className={styles.listItemLink} onClick={() => setOpen(false)}>Feature</Link>
                                <Link href="/" className={styles.listItemLink} onClick={() => setOpen(false)}>Product</Link>
                                <Link href="/" className={styles.listItemLink} onClick={() => setOpen(false)}>Testimonial</Link>
                                <Link href="/" className={styles.listItemLink} onClick={() => setOpen(false)}>FAQ</Link>
                            </div>

                            <div className={styles.boxBtn}>
                                <button className={styles.btnLogin}>Login</button>
                                <button className={styles.btnSignUp}>Sign up</button>
                            </div>
                        </div> 
                    </nav>
                </div>
            </div>

            {open && (
                <div
                    className={styles.backdrop}
                    onClick={() => setOpen(false)}
                />
            )}
        </header>


    );
}