import Link from 'next/link';
import styles from './styles.module.css';

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <h1>Alegría Gatuna App</h1>
            <ul>
                <li>
                    <Link href="/">Alegría Gatuna</Link>
                </li>
                <li>
                    <Link href="/">Adoptar</Link>
                </li>
                <li>
                    <Link href="/">Ver Gatos</Link>
                </li>
            </ul>
        </nav>
    )
}