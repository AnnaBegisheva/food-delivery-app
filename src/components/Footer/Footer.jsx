import styles from './footer.module.scss';
import classNames from 'classnames/bind';
import Logo from '../Logo/Logo';
import List from '../List/List';
import { OTHER_COMPANY, OTHER_HELP, CONTACTS } from '../../constants/index';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        <Logo />
        <div className={cx('copy')}>&copy; Copyright 2024 — Super Pizza</div>
        <nav className={cx('footer-item')}>
          <List
            title="Компания"
            items={OTHER_COMPANY}
            titleClass={cx('title')}
            listClass={cx('list')}
            itemClass={cx('item')}
          />
        </nav>
        <nav className={cx('footer-item')}>
          <List
            title="Помощь"
            items={OTHER_HELP}
            titleClass={cx('title')}
            listClass={cx('list')}
            itemClass={cx('item')}
          />
        </nav>
        <address className={cx('footer-item')}>
          <List
            title="Контакты"
            items={CONTACTS}
            titleClass={cx('title')}
            listClass={cx('list')}
            itemClass={cx('item', 'contactsItem')}
          />
        </address>
      </div>
    </footer>
  );
}

export default Footer;
