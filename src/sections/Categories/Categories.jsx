import "./Categories.scss"
import Section from "@/layouts/Section"
import CategoryCard from "@/components/CategoryCard"
import categoryItems from "./categoryItems"

const Categories = () => {
  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={
        <div>
          <button>Back</button>
        </div>
      }
      isActionsHiddenOnMobile
    >
      {categoryItems.map((categoryItem, index) => (
        <CategoryCard {...categoryItem} key={index} />
      ))}
    </Section>
  )
}

export default Categories
