import IconHandler from '../../handlers/icon_handler';

function List({ title, items, titleClass, listClass, itemClass }) {
  return (
    <div>
      {title && <h2 className={titleClass}>{title}</h2>}
      <ul className={listClass}>
        {items.map((item) => (
          <li
            className={itemClass}
            key={item.value}
          >
            {item?.icon && <IconHandler code={item?.icon} />}
            <a
              href={item.link}
              target={item?.target}
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
