import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './contact.css';
import Slider from '../../Slider';
function Contact() {
  return (
    <div>
      <Header></Header>
      <br />
      <section className='main1'>
        <h4>КОНТАКТЫ</h4>
        <h1>ШОУ РУМ TRUE В ТАШКЕНТЕ </h1>
        <h2>ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В  ТАШКЕНТ СИТИ, BOULEVARD</h2>
      </section>
      <main className='container'>
        <br />
        <br /><br />
<Slider ></Slider>
<br />
<section className='main2'>
  <img src="./blue.png" alt="" />
  <div className='a'>
    <h2>Официальный Дистрибьютер <br /> в Узбекистане - ProWellness </h2>
    <div>
      <p>+998 (90)-606-66-66</p>
    <h2>INFO@PROWELLNESS.UZ</h2>
    <p>Адрес: Ташкент Сити, Булевард, ул. Фурката 2А</p>
    </div>
    <h2>ПН-СБ с 9:00-19:00 
ВС НЕ РАБОЧИЙ</h2>
  </div>
</section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Contact