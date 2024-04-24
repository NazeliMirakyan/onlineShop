import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import style from "./Category.module.css";
import { getAllCategories, getSpecificCategory } from "../../redux/middleware";

const CategorySection = ({setIsOpen}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const categoryNames = useSelector((store) => store.productReducer.categoryNames);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
    dispatch(getSpecificCategory(category));
    setIsOpen(false)
  };


  return (
    <div className={style.categories_container}>
      {categoryNames.map((category, index) => (
        <CategoryItem
          key={index}
          category={category}
          selectedCategory={selectedCategory}
          handleChangeCategory={handleChangeCategory}
        />
      ))}
    </div>
  );
};

export default CategorySection;