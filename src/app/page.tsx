import Header from '@/components/header/Header'
import Section_01 from '@/components/section_01/Section_01'
import Section_02 from '@/components/section_02/Section_02'
import Section_03 from '@/components/section_03/Section_03'
import Section_04 from '@/components/section_04/Section_04'
import Section_05 from '@/components/section_05/Section_05'
import Section_06 from '@/components/section_06/Section_06'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Section_01 />
      <Section_02 />
      <Section_03 />
      <Section_04 />
      <Section_05 />
      <Section_06 />
      <Footer />
    </main>
  )
}
