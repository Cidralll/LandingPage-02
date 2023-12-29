import Image from 'next/image';
import styles from './Section_01.module.scss';
import Button from '../button/Buttton';
import Card from '../card/Card';

export default function Section_01() {
    return (
        <>
            <section className={styles.section_01}>
                <div className={styles.divTitles}>
                    <h1>LC - VPN: Segurança, Privacidade e Conexão.</h1>
                    <h2>Tenha uma rede completa para suas necessidades com simplicidade e entretenimento através da LC - VPN.</h2>
                    <Button text='Comece agora' />
                </div>
                <div className={styles.divImg}>
                    <Image
                        src={'/Illustration01.png'}
                        alt={'Logo'}
                        width={600}
                        height={360}
                        priority
                    />
                </div>
            </section>
            <section className={styles.sectionCards}>
                <Card src='/user.png' alt='img user' h2='250+' h3='Usuários' />
                <Card src='/location.png' alt='img locatiob' h2='50+' h3='Localização' />
                <Card src='/server.png' alt='img server' h2='50+' h3='Servidores' />
            </section>
        </>
    );
}