import Image from 'next/image';
import styles from './Section_02.module.scss';
import IconCaretRight from '@/icons/IconCaretRight';

export default function Section_02() {
    return(
        <section className={styles.section_02}>
            <div className={styles.divImg}>
                <Image
                    src={'/Illustration02.png'}
                    alt={'Logo'}
                    width={508}
                    height={414}
                    priority
                />
            </div>
            <div className={styles.divTitles}>
                <h1>Fornecemos muitos recursos para você usar</h1>
                <h2>Você pode explorar os recursos que oferecemos com diversão e ter suas próprias funções em cada recurso.</h2>
                <div className={styles.divList}>
                    <IconCaretRight />
                    <p>Proteção on-line poderosa.</p>
                </div>
                <div className={styles.divList}>
                    <IconCaretRight />
                    <p>Internet sem fronteiras.</p>
                </div>
                <div className={styles.divList}>
                    <IconCaretRight />
                    <p>Super VPN</p>
                </div>
                <div className={styles.divList}>
                    <IconCaretRight />
                    <p>Sem limites de tempo.</p>
                </div>
            </div>
        </section>
    );
}