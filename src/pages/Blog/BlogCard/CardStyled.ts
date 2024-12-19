import tw from 'twin.macro'
import styled from 'styled-components'

export const CardContainer = styled.div`
  ${tw`rounded-xl bg-white shadow-lg overflow-hidden`}
`

export const CardHeader = styled.div`
  ${tw`relative`}
`

export const CardContent = styled.div`
  ${tw`p-6`}
`

export const CategoryTag = styled.div`
  ${tw`text-pink-500 font-bold text-sm`}
`

export const Title = styled.h3`
  ${tw`mt-2 text-2xl font-semibold text-gray-800`}
`

export const Description = styled.p`
  ${tw`mt-2 text-gray-600`}
`

export const ReadMoreButton = styled.a`
  ${tw`inline-block mt-4 text-pink-500 font-semibold hover:underline`}
`
