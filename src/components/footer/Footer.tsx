import Image from 'next/image';
import Logo from '../logo/Logo';
import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.divLeft}>
                <Logo />
                <h1 className={styles.subtitle}>LC VPN é uma rede virtual privada que possui recursos exclusivos e alta segurança.</h1>
                <div className={styles.images}>
                    <Image
                        src={'/facebook.png'}
                        alt={'Logo'}
                        width={75}
                        height={75}
                        priority
                        style={{cursor: 'pointer'}}
                    />
                    <Image
                        src={'/Twitter.png'}
                        alt={'Logo'}
                        width={75}
                        height={75}
                        priority
                        style={{cursor: 'pointer'}}
                    />
                    <Image
                        src={'/Instagram.png'}
                        alt={'Logo'}
                        width={75}
                        height={75}
                        priority
                        style={{cursor: 'pointer'}}
                    />
                </div>
                <h2 className={styles.subtitle}>&copy; 2024 LC VPN</h2>
            </div>
            <div className={styles.divRight}>
                <h1 className={styles.copyright}>Créditos: A totalidade da parte visual, incluindo artes e imagens, neste site foi desenvolvida com base no projeto do Figma apresentado a seguir. Esta página tem como finalidade servir como um portfólio, não sendo uma representação comercial real</h1>
                <Link className={styles.link} href={'https://www.figma.com/community/file/858999227165747995/freebies-landingpage-laslesvpn'} target="_blank">* Projeto Figma</Link>
            </div>
        </footer>
    );
}