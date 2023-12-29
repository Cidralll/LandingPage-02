import Button from '../button/Buttton';
import styles from './Section_06.module.scss';

export default function Section_06() {
    return (
        <section className={styles.section_06}>
            <div>
                <h1 className={styles.title}>Inscreva-se agora para obter recursos especiais!</h1>
                <h2 className={styles.subtitle}>Inscreva-se agora para descobrir a diversão.</h2>
            </div>
            <Button text='Inscreva-se agora' />
        </section>
    );
}