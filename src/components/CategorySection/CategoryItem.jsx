import style from './Category.module.css';

const CategoryItem = ({ category, selectedCategory, handleChangeCategory }) => {
  const isSelected = selectedCategory === category;

  const handleClick = () => {
    handleChangeCategory(category);
  };

  return (
    <div
      className={`${style.category_names} ${isSelected ? style.selected_category : ''}`}
      onClick={handleClick}
    >
      <p>{category}</p>
    </div>
  );
};

export default CategoryItem;