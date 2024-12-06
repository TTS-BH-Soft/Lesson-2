import styled from 'styled-components'
import tw from 'twin.macro'

type CardContainerProps = {
  hasShadow: boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  ${tw`flex flex-col items-center justify-center w-[424px] h-[402px] p-[20px] rounded-[42px] transition-transform duration-200`}
  background-color: ${({ hasShadow }) => (hasShadow ? '#fff' : 'none')};
  box-shadow: ${({ hasShadow }) =>
    hasShadow ? '0px 25px 50px 25px rgba(246, 247, 255, 1)' : 'none'};

  &:hover {
    transform: translateY(-10px);
  }
`

export const Image = tw.img`
  text-[40px]
`

export const Title = tw.h3`
  text-[16px] text-[#ff64ae] my-[5px]
`

export const Content = tw.p`
  text-[24px] text-[#091156] font-semibold
`

export const SubText = tw.p`
  max-w-[270px] text-[14px] text-[#8b8b8b] mt-[10px] leading-[1.5] text-center
`
