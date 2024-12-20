import tw from 'twin.macro'
import styled from 'styled-components'

export const CardContainer = styled.div`
  ${tw`rounded-[3rem] bg-white shadow-lg overflow-hidden max-w-[730px] h-[953px] my-[4rem]`}
`

export const CardHeader = styled.div`
  ${tw`relative`}
`

export const CardContent = styled.div`
  ${tw`p-6 h-[500px] max-w-[612px] mx-[auto]`}
`

export const CategoryTag = styled.div`
  ${tw`text-pink-500 font-bold text-sm`}
`

export const Category = styled.div`
  ${tw`h-[273px]`}
`

export const Title = styled.h3`
  ${tw`mt-2 text-2xl font-semibold [color: #091156] max-w-[600px]`}
`

export const Description = styled.p`
  ${tw`mt-2 text-gray-600 max-w-[592px]`}
`

export const ReadMoreButton = styled.a`
  ${tw`inline-block mt-4 text-pink-500 font-semibold hover:underline`}
`
