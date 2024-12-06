import styled from 'styled-components'
import tw from 'twin.macro'

interface MissionBoxProps {
  reverse?: boolean
}

export const MissionContainer = tw.div`
  max-w-xl mx-auto
`

export const MissionBox = styled.div<MissionBoxProps>`
  ${tw`flex justify-between items-center mb-4`}
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`

export const ContentBox = tw.div`
  max-w-sm
`

export const Title = tw.h5`
  [font-weight:600]
`

export const Heading = tw.h2`
  [font-weight:600]
`

export const Description = tw.p`
  mt-4
`