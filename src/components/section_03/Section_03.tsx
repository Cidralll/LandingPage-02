import PlanCard from '../planCard/PlanCard';
import styles from './Section_03.module.scss';

export default function Section_03() {
    return (
        <section className={styles.section_03}>
            <h1 className={styles.h1}>Escolha o seu plano</h1>
            <h2 className={styles.h2}>Opte pelo pacote mais adequado às suas necessidades.</h2>
            <div className={styles.divPlanCard}>
                <PlanCard src='/free.png' alt='box' planTitle='Plano Grátis' price='Grátis' />
                <PlanCard src='/standard.png' alt='box' planTitle='Plano Padrão' price='R$ 19,90' />
                <PlanCard src='/premium.png' alt='box' planTitle='Plano Premium' price='R$ 29,90' />
            </div>
        </section>
    );
}