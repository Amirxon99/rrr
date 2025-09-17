import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './home.css'

function Home() {
  return (
    <div className='container'>
      <Header></Header>
      <div className="ota">
        <h1>TRUE FITNESS - ПРЕМИУМ <br />  ТРЕНАЖЕРЫ ИЗ США</h1>
      </div>
      <h2 className='h2'>TRUE - ведущий мировой <br /> производитель премиального фитнес <br /> оборудования</h2>

      <div className="sport">
        <div className="img">
          <h1>TRUE <br /><samp> FITNESS</samp></h1>
          <br /><h3>Современное и <br /> надежное <br /> оборудование для <br /> фитнес-клубов<samp> <br /><br />КАРдио <br /> тренажеры</samp></h3>
        </div>
        <img src="./o.png" alt="" />
      </div>

      <div className="sportcard">
        <div className="carq">
          <div className="imgcard">
            <h2>Лучшие <br /> характеристики</h2>
            <p>Наши тренажеры имеют самые совершенные <br /> характеристики в классе, от более мощных технических <br /> показателей до расширенных функциональных <br /> возможностей</p>
          </div>
          <div className="yozcard">
            <h3>ВЫСОКОЕ КАЧЕСТВО И <br /> НАДЕЖНОСТЬ</h3>
            <p>Высокое качество тренажеров - это визитная карточка <br /> TRUE. Кроме того TRUE предоставляет до 5 лет гарантии <br /> на кардиотренажеры.</p>
          </div>
        </div>
        <div className="carq">
          <div className="yozcard">
            <h3>ВЫСОКОЕ КАЧЕСТВО И <br /> НАДЕЖНОСТЬ</h3>
            <p>Высокое качество тренажеров - это визитная карточка <br /> TRUE. Кроме того TRUE предоставляет до 5 лет гарантии <br /> на кардиотренажеры.</p>
          </div>
          <div className="imgcard">
            <h2>Лучшие <br /> характеристики</h2>
            <p>Наши тренажеры имеют самые совершенные <br /> характеристики в классе, от более мощных технических <br /> показателей до расширенных функциональных <br /> возможностей</p>
          </div>
        </div>


      </div>

      <div className="imge">
        <div className="inputcard">
          <h3>Получите эксклюзивное <br /> предложение на тренажеры <br /> TRUE FITNESS</h3>
          <p>Мы будем рады проконсультировать Вас и помочь с <br /> подбором оборудования</p>
          <div className="input">
            <input type="text" placeholder='имя' />
            <input type="text" placeholder='EMail' />
            <input type="text" placeholder='+998 (99)-999-99-99' />
            <button className='bttn'>ОТПРАВИТЬ</button>
          </div>
          <p>Нажимая на кнопку, вы даете согласие на обработку <br /> персональных данных и соглашаетесь c политикой <br /> конфиденциальности</p>
        </div>
      </div>



      <Footer></Footer>
    </div>
  )
}

export default Home