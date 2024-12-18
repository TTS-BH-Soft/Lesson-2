import styled from 'styled-components'
import tw from 'twin.macro'

interface MissionBoxProps {
  reverse?: boolean
}

export const MissionContainer = tw.div`
  max-w-[1137px] mx-auto
`

export const MissionBox = styled.div<MissionBoxProps>`
  ${tw`flex justify-between items-center mb-4 mt-[7rem]`}
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`

export const ContentBox = tw.div`
  max-w-[475px]
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
