import {
  RecentPostsContainer,
  RecentPostItem,
  RecentPostImage,
  RecentPostDate,
  RecentPostTitle,
} from './RecentPostStyled'

import Image1 from '../../../assets/Blogs/post-1.svg'
import Image2 from '../../../assets/Blogs/post-2.svg'
import Image3 from '../../../assets/Blogs/post-3.svg'

const posts = [
  {
    id: 1,
    date: '01 jan 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: Image1,
  },
  {
    id: 2,
    date: '01 jan 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: Image2,
  },
  {
    id: 3,
    date: '01 jan 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: Image3,
  },
]

export default function RecentPost() {
  return (
    <RecentPostsContainer>
      <h3 tw="text-lg font-bold text-gray-800 mb-4">Recent Posts</h3>
      <ul>
        {posts.map(post => (
          <RecentPostItem key={post.id}>
            <RecentPostImage src={post.image} alt={post.title} />
            <div>
              <RecentPostDate>{post.date}</RecentPostDate>
              <RecentPostTitle>{post.title}</RecentPostTitle>
            </div>
          </RecentPostItem>
        ))}
      </ul>
    </RecentPostsContainer>
  )
}
