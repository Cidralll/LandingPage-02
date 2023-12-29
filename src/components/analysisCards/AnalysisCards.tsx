import Image from 'next/image';
import styles from './AnalysisCards.module.scss';

interface Props {
    src: string;
    alt: string;
    name: string;
    local: string;
    note: string;
    description: string;
}

export default function AnalysisCards({ src, alt, name, local, note, description } : Props) {
    return (
        <section className={styles.analysisCards}>
            <div className={styles.identification}>
                <Image
                    src={src}
                    alt={alt}
                    width={50}
                    height={50}
                    priority
                />
                <div className={styles.text}>
                    <h1 className={styles.name}>{ name }</h1>
                    <h2 className={styles.local}>{ local }</h2>
                </div>
                <p className={styles.note}>{ note }</p>
                <Image
                    src={'/star.png'}
                    alt={'Logo'}
                    width={25}
                    height={25}
                    priority
                />
            </div>
            <div className={styles.description}>
                <p>{ description }</p>
            </div>
        </section>
    );
}