import { CategoriesContainer, CategoryItem } from './CategoriesStyled'

const categories = ['Consultation', 'Beauty', 'Treatments', 'News']

const Categories = () => {
  return (
    <CategoriesContainer>
      <h3 tw="text-lg font-bold text-gray-800 mb-4">Categories</h3>
      <ul tw="space-y-2">
        {categories.map((category, index) => (
          <CategoryItem key={index}>{category}</CategoryItem>
        ))}
      </ul>
    </CategoriesContainer>
  )
}

export default Categories
