import { CloudTagsContainer, Tag, TagsWrapper } from './CloudTagsStyled'

const tags = [
  'beauty',
  'cute',
  'skin',
  'glow',
  'style',
  'clinic',
  'style',
  'great',
  'cute',
]

export default function CloudTags() {
  return (
    <CloudTagsContainer>
      <h3 tw="text-lg font-bold text-gray-800 mb-4">Cloud Tags</h3>
      <TagsWrapper>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsWrapper>
    </CloudTagsContainer>
  )
}
