import tw from 'twin.macro'
import styled from 'styled-components'

export const GalleryContainer = styled.section`
  ${tw`w-full px-4 py-8 lg:px-20`}
`

export const GridContainer = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8`}
`

export const ImageBox = styled.div<{ reverse: boolean }>`
  ${tw`flex items-center`}
  ${({ reverse }) => (reverse ? tw`sm:flex-row-reverse` : tw`sm:flex-row`)}
  img {
    ${tw`w-full h-full object-cover rounded-lg`}
  }
`

export const Title = styled.h2`
  ${tw`text-2xl font-bold text-center mb-4`}
`

export const Subtitle = styled.p`
  ${tw`text-sm text-gray-500 text-center`}
`
