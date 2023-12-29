import Image from 'next/image';
import styles from './PlanCard.module.scss';
import IconCaretRight from '@/icons/IconCaretRight';

interface Props {
    src: string;
    alt: string;
    planTitle: string;
    price: string;
}

export default function PlanCard({ src, alt, planTitle, price } : Props) {
    return(
        <section className={styles.planCard}>
            <Image
                src={src}
                alt={alt}
                width={144}
                height={165}
                priority
            />
            <h1>{ planTitle }</h1>

            <div className={styles.items}>
                <IconCaretRight />
                <p>Largura de banda ilimitada</p>
            </div>
            <div className={styles.items}>
                <IconCaretRight />
                <p>Conexão criptografada</p>
            </div>
            <div className={styles.items}>
                <IconCaretRight />
                <p>Vários dispositivos</p>
            </div>

            {planTitle === 'Plano Grátis' && (
                <div className={styles.items}>
                    <IconCaretRight />
                    <p>Sem registros de tráfego</p>
                </div>
            )}

            {planTitle === 'Plano Padrão' && (
                <>
                    <div className={styles.items}>
                        <IconCaretRight />
                        <p>Com registros de tráfego</p>
                    </div>
                    <div className={styles.items}>
                        <IconCaretRight />
                        <p>Com registros de tráfego</p>
                    </div>
                </>
            )}

            {planTitle === 'Plano Premium' && (
                <>
                <div className={styles.items}>
                    <IconCaretRight />
                    <p>Com registros de tráfego</p>
                </div>
                <div className={styles.items}>
                    <IconCaretRight />
                    <p>Com registros de tráfego</p>
                </div>
                <div className={styles.items}>
                    <IconCaretRight />
                    <p>Obtenha novos recursos</p>
                </div>
            </>
            )}

            <h1>{ price }</h1>

            <button className={styles.button}>Selecionar</button>
        </section>
    );
}