import Section from "@/layouts/Section";
import "./Categories.scss";
import categoryItems from "./categoryItems";
import CategoryCard from "@/components/CategoryCard"

const Categories = (props) => {
  return (
    <Section
      className="categories"
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={
        <>
          <button>Next</button>
        </>
      }
      isActionsMobileHidden
    >
      {categoryItems.map((categoryItem, index) => (
        <CategoryCard {...categoryItem} key={index} />
      ))}
    </Section>
  );
};

export default Categories;
