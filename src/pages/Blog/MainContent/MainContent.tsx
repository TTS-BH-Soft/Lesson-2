import BlogAside from '../BlogAside/BlogAside'
import BlogCardList from '../BlogCardList/BlogCardList'
import { MainContentBox } from './MainContentStyled'

export default function MainContent() {
  return (
    <MainContentBox>
      <BlogCardList />
      <BlogAside />
    </MainContentBox>
  )
}
