import Image from 'next/image';
import styles from "./page.module.css";
import ListaAdopcion from './components/ListaAdopcion';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.banner}>
          <Image
            src="/images/imagen_banner_3.png"
            alt="Banner home"
            width={0}
            height={0}
            sizes="70vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <h1>Bienvenidos al Hogar de paso Alegría Gatuna</h1>

          <div className={styles.banner_content}>
            <p>Somos una organización sin fines de lucro dedicada al cuidado de gatos abandonados y maltratados. Brindamos hogar temporal, atención médica y todo el amor que necesitan.</p>
            <button className={styles.banner_button}>Conoce cómo ser voluntario</button>
          </div>
        </div>
        <div className={styles.lista_adopcion}>
          <h2>Conoce a tu nuevo mejor amigo</h2>
          <ListaAdopcion />
        </div>
      </main>

    </div>
  );
}

