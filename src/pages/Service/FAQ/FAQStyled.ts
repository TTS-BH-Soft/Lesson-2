/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import styled from 'styled-components'

export const FAQContainer = styled.section`
  ${tw`w-full px-4 py-8 lg:px-20`}
`

export const FAQHeader = styled.h2`
  ${tw`text-3xl font-bold text-center mb-6`}
`

export const FAQItem = styled.div`
  ${tw`border-b border-gray-300 cursor-pointer`}
  &:last-child {
    ${tw`border-none`}
  }
`

export const FAQQuestion = styled.div<{ isOpen: boolean }>`
  ${tw`flex justify-between items-center py-4 text-lg font-bold text-gray-800`}
  ${({ isOpen }) => isOpen && tw`text-blue-600`}
`

export const FAQAnswer = styled.p`
  ${tw`text-sm text-gray-600 p-4`}
`
