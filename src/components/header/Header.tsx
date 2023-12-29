import Image from 'next/image';
import styles from './Header.module.scss';
import Logo from '../logo/Logo';

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <section className={styles.sectionLinks}>
                <h3>Sobre</h3>
                <h3>Características</h3>
                <h3>Preço</h3>
                <h3>Depoimentos</h3>
                <h3>Ajuda</h3>
            </section>
        </header>
    );
}