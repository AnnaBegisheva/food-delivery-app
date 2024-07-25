const Categories = ({ categories, linkClass, children }) => {
  return (
    <>
      {categories?.map((category) => (
        <a href='#' className={linkClass} key={category.id}>
          {children && children(category.code ? category.code : 'combo')}
          <span>{category.name}</span>
        </a>
      ))}
    </>
  )
}

export default Categories
