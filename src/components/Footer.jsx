import styles from '../styles/modules/layout/footer.module.scss'
import classNames from 'classnames/bind'
import Logo from './Logo'

function Footer() {
  const cx = classNames.bind(styles)

  return (
    <>
      <footer className={cx('footer')}>
        <div className={cx('container')}>
          <div className={cx('footer__section', 'logo-box')}>
            <Logo />
            <div className={cx('copy')}>&copy; Copyright 2024 — Super Pizza</div>
          </div>

          <nav className={cx('footer__nav')}>
            <section className={cx('footer__section')}>
              <h4 className={cx('footer__title')}>Компания</h4>
              <ul className={cx('footer__list')}>
                <li>
                  <a href='#'>О нас</a>
                </li>
                <li>
                  <a href='#'>Пользовательское соглашение</a>
                </li>
                <li>
                  <a href='#'>Политика конфиденциальности</a>
                </li>
              </ul>
            </section>

            <section className={cx('footer__section')}>
              <h4 className={cx('footer__title')}>Помощь</h4>
              <ul className={cx('footer__list')}>
                <li>
                  <a href='#'>Ресторан</a>
                </li>
                <li>
                  <a href='#'>Поддержка</a>
                </li>
                <li>
                  <a href='#'>Отследить заказ</a>
                </li>
              </ul>
            </section>
          </nav>

          <address className={cx('footer__section')}>
            <h4 className={cx('footer__title')}>Контакты</h4>
            <ul className={cx('footer__list')}>
              <li className={cx('contacts__list-item', 'contacts__list-item--phone')} id='phone'>
                <a href='tel:+79262231011'>+7 (926) 223-10-11</a>
              </li>
              <li className={cx('contacts__list-item', 'contacts__list-item--address')}>
                <a
                  href='https://www.google.fr/maps/place/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+99,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+115597/@55.6099368,37.7586958,17z/data=!3m1!4b1!4m5!3m4!1s0x414ab11519f07349:0x1a82a22689b083fa!8m2!3d55.6099338!4d37.7612707?entry=ttu'
                  target='_blank'>
                  Москва, ул. Воронежская, д.99
                </a>
              </li>
              <li className={cx('contacts__list-item', 'contacts__list-item--facebook')}>
                <a href='#'>Facebook</a>
              </li>
              <li className={cx('contacts__list-item', 'contacts__list-item--instagram')}>
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
