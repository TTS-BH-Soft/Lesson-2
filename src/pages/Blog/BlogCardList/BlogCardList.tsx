import BlogCard from '../BlogCard/BlogCard'
import { blogCardData } from '../../../data/blogCardData'

const BlogCardList = () => {
  return (
    <div tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogCardData.map((card, index) => (
        <BlogCard key={index} {...card} />
      ))}
    </div>
  )
}

export default BlogCardList
