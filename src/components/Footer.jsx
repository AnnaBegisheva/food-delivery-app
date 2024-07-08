import styles from '../styles/modules/layout/footer.module.scss'
import classNames from 'classnames/bind'
import Logo from './Logo'

const cx = classNames.bind(styles)

function Footer() {
  return (
    <>
      <footer className={cx('footer')}>
        <div className={cx('container')}>
          <section className={cx('section', 'logo-box')}>
            <Logo />
            <div className={cx('copy')}>&copy; Copyright 2024 — Super Pizza</div>
          </section>

          <nav className={cx('nav')}>
            <section className={cx('section')}>
              <h4 className={cx('title')}>Компания</h4>
              <ul className={cx('list')}>
                <li className={cx('item')}>
                  <a href='#'>О нас</a>
                </li>
                <li className={cx('item')}>
                  <a href='#'>Пользовательское соглашение</a>
                </li>
                <li className={cx('item')}>
                  <a href='#'>Политика конфиденциальности</a>
                </li>
              </ul>
            </section>

            <section className={cx('section')}>
              <h4 className={cx('title')}>Помощь</h4>
              <ul className={cx('list')}>
                <li className={cx('item')}>
                  <a href='#'>Ресторан</a>
                </li>
                <li className={cx('item')}>
                  <a href='#'>Поддержка</a>
                </li>
                <li className={cx('item')}>
                  <a href='#'>Отследить заказ</a>
                </li>
              </ul>
            </section>
          </nav>

          <address className={cx('section')}>
            <h4 className={cx('title')}>Контакты</h4>
            <ul className={cx('list')}>
              <li className={cx('item', 'contactsItem', 'contactsItem--phone')} id='phone'>
                <a href='tel:+79262231011'>+7 (926) 223-10-11</a>
              </li>
              <li className={cx('item', 'contactsItem', 'contactsItem--address')}>
                <a
                  href='https://www.google.fr/maps/place/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+99,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+115597/@55.6099368,37.7586958,17z/data=!3m1!4b1!4m5!3m4!1s0x414ab11519f07349:0x1a82a22689b083fa!8m2!3d55.6099338!4d37.7612707?entry=ttu'
                  target='_blank'>
                  Москва, ул. Воронежская, д.99
                </a>
              </li>
              <li className={cx('item', 'contactsItem', 'contactsItem--facebook')}>
                <a href='#'>Facebook</a>
              </li>
              <li className={cx('item', 'contactsItem', 'contactsItem--instagram')}>
                <a href='#'>Instagram</a>
              </li>
            </ul>
          </address>
        </div>
      </footer>
    </>
  )
}

export default Footer
