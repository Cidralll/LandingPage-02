import AnalysisCards from '../analysisCards/AnalysisCards';
import styles from './Section_05.module.scss';

export default function Section_05() {
    return (
        <section className={styles.section_05}>
            <h1 className={styles.title}>Aprovado por centenas de clientes satisfeitos</h1>
            <h2 className={styles.subtitle}>Opiniões Reais: O que nossos usuários têm a dizer sobre a LC VPN</h2>
            <div className={styles.divAnalysisCards}>
                <AnalysisCards src='/user01.png' alt='user 01' name='Vitor Silva' local='São Paulo, Brasil' note='4.6' description='“Nossa... estou muito feliz em usar essa VPN, acabou superando minhas expectativas e até o momento não houve problemas. LC VPN sempre o melhor”.' />
                <AnalysisCards src='/user02.png' alt='user 01' name='Joana Veber' local='Ponta Grossa, Brasil' note='4.5' description='“Impressionado com a eficácia da LC VPN! Não tive nenhum contratempo desde que comecei a usá-la. Recomendo!”.' />
                <AnalysisCards src='/user03.png' alt='user 01' name='Mario Schno' local='Rio de Janeiro, Brasil' note='4.8' description='“Minha experiência com a LC VPN tem sido incrível! Superou minhas expectativas, sem nenhum problema até agora. LC VPN, sempre a escolha certa!”.' />
            </div>
        </section>
    );
}