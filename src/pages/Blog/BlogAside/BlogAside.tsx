import Categories from '../Categories/Categories'
import CloudTags from '../CloudTags/CloudTags'
import RecentPost from '../RecentPost/RecentPost'
import SearchBar from '../SearchBar/SearchBar'
import SocialConnect from '../SocialConnect/SocialConnect'
import { AsideContainer } from './BlogAsideStyled'

export default function BlogAside() {
  return (
    <AsideContainer>
      <SearchBar />
      <RecentPost />
      <Categories />
      <CloudTags />
      <SocialConnect />
    </AsideContainer>
  )
}
