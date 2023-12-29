import Image from 'next/image';
import styles from './Logo.module.scss';

export default function Logo() {
    return (
        <section className={styles.sectionLogo}>
            <Image
                src={'/logo.png'}
                alt={'Logo'}
                width={37}
                height={38}
                priority
            />
            <h1>LC - VPN</h1>
        </section>
    );
}