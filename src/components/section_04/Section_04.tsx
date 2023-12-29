import Image from 'next/image';
import styles from './Section_04.module.scss';

export default function Section_04() {
    return (
        <section className={styles.section_04}>
            <h1>Ampla e veloz rede global de VPN.</h1>
            <h2>Nossos servidores estão presentes no mundo todo</h2>
            <Image
                src={'/map.png'}
                alt={'Logo'}
                width={1080}
                height={538}
                priority
            />
        </section>
    );
}