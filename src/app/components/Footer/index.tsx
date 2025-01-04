import Link from "next/link";
import styles from './styles.module.css';
export default function Footer() {

    return (
        <div className={styles.footerContainer}>
            <p>Alegría Gatuna - Hogar de paso</p>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Preguntas frecuentes</Link>
                    </li>
                    <li>
                        <Link href="/">Contáctenos</Link>
                    </li>
                    <li>
                        <Link href="/">Admin Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/">Cómo adoptar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}