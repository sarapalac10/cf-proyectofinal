import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.css';

export default function Footer() {

    return (
        <div className={styles.footerContainer}>
            <p>Alegría Gatuna: Hogar de paso - 2025</p>
            <nav>
                <ul>
                    <li className={styles.footerSocialIcons}>
                        <Link href="/">
                            <Image
                                src="/icons/fb_icon.svg"
                                alt="Ícono de facebook"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link href="https://www.instagram.com/alegria.gatuna/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/icons/instagram_icon.svg"
                                alt="Ícono de instagram"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/">Acerca de nosotros</Link>
                    </li>
                    <li>
                        <Link href="/">Contacto</Link>
                    </li>
                    <li>
                        <Link href="/">Ser voluntario</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}