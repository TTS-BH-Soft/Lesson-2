import {
  SearchBarContainer,
  SearchInput,
  SearchButton,
} from './SearchBarStyled'

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput type="text" placeholder="Search here ..." />
      <SearchButton>Search</SearchButton>
    </SearchBarContainer>
  )
}
