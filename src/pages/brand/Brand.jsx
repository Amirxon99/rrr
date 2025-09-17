import Header from "../../components/header/Header";
import styles from "./brand.module.css";

function Brand() {
  return (
    <div>
      <header>
        <div className="container">
          <p className={styles.about}>О НАШЕМ БРЕНДЕ</p>
          <h3 className={styles.tur}>TRUE - СОВЕРШЕННОE ФИТНЕС-ОБОРУДОВАНИЕ</h3>
        </div>
      </header>
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.text}>
                <p className={styles.bluep}>
                  Это совершенство обеспечивается высококачественными,
                  долговечными материалами и технологиями, которые мы используем
                  для производстве наших машин. Но оно также создается и
                  благодаря нашей преданности клиентам и их потребностям.
                </p>
                <p className={styles.blackp}>
                  Наша опытная команда предлагает комплексное обслуживание,
                  начиная от планирования объекта до технического обслуживания и
                  оснащения ваших залов новейшими технологиями. Являясь вашим
                  надежным партнером, мы делаем все возможное, чтобы ваше
                  предприятие продолжало эффективно работать годы и годы.
                </p>
                <p className={styles.blackp}>
                  Вы можете рассчитывать на нас в предоставлении одних из лучших
                  услуг в отрасли. Мы ориентированы на оптимизацию срока службы
                  вашего фитнес-оборудования. Мы всегда ищем способы расширить
                  сферу взаимодействия с нашими клиентами, будь то
                  предоставление учебных материалов для ваших сотрудников и
                  инструкторов, или разработка технологических решений,
                  отвечающих потребностям современных пользователей.
                </p>
                <p className={styles.darkb}>
                  Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может
                  помочь вашей компании добиться успеха.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.hero2}>
          <div className={styles.container}>
            <h1 className={styles.inovation}>Наши инновации</h1>
            <div className={styles.cardota}>
              <div className={styles.card}>
                <img src="./b.png" alt="" />
                <h3 className={styles.trener}>Тренажер Лестница TRUE Palisade</h3>
                <div className={styles.bb}></div>
              </div>
              <div className={styles.card}>
                <img src="./b.png" alt="" />
                <h3 className={styles.trener}>Тренажер Лестница TRUE Palisade</h3>
                <div className={styles.bb}></div>
              </div>
              <div className={styles.card}>
                <img src="./b.png" alt="" />
                <h3 className={styles.trener}>Тренажер Лестница TRUE Palisade</h3>
                <div className={styles.bb}></div>
              </div>
              <div className={styles.card}>
                <img src="./b.png" alt="" />
                <h3 className={styles.trener}>Тренажер Лестница TRUE Palisade</h3>
                <div className={styles.bb}></div>
              </div>
              <div className={styles.card}>
                <img src="./b.png" alt="" />
                <h3 className={styles.trener}>Тренажер Лестница TRUE Palisade</h3>
                <div className={styles.bb}></div>
              </div>
              <div className={styles.card}>
                <img src="./b.png" alt="" />
                <h3 className={styles.trener}>Тренажер Лестница TRUE Palisade</h3>
                <div className={styles.bb}></div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.hero3}>
          <div className={styles.container}>
<div className={styles.box2}>
  <p className={styles.fitnes}>TRUE FITNESS</p>
    <h1 className={styles.bigtext}>Получите <br /> <span className={styles.blues}>эксклюзивное предложение</span> на тренажеры <span className={styles.blues}>TRUE FITNESS</span></h1>
    <p className={styles.tre}>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>
    <div className={styles.inputdiv}>
      <input placeholder="имя"  className={styles.name}/>
      <input placeholder="+998 (99)-999-99-99"  className={styles.name}/>
      <input placeholder="E-MAIL"  className={styles.name}/>
      <button className={styles.btn}>
        Отправить
      </button>
    </div>
    <p className={styles.click}>«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности»</p>
</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Brand;
