import Image from 'next/image';
import styles from './Card.module.scss';

interface Props {
    src: string;
    alt: string;
    h2: string;
    h3: string;
}

export default function Card({ src, alt, h2, h3 }: Props) {
    return (
        <div className={styles.divCard}>
            <Image
                src={src}
                alt={alt}
                width={50}
                height={50}
                priority
            />
            <div>
                <h2>{ h2 }</h2>
                <h3>{ h3 }</h3>
            </div>
        </div>
    );
}