import tw, { styled } from 'twin.macro'

// StyleItem
export const StyleItem = styled.div`
  ${tw`flex flex-col items-center justify-between text-center max-w-[343px] min-h-[458px] z-[4]`}
  ${tw`rounded-[42px] p-[2.6rem 0.9rem]`}
  box-shadow: 0 25px 50px 25px #f6f7ff;

  @media (max-width: 768px) {
    ${tw`p-[2rem 1rem] min-h-[300px]`}
    box-shadow: 0 10px 20px #e0e0e0;
  }
`

// StyleImage
export const StyleImage = styled.img`
  ${tw`w-[166px] h-[166px] my-[1.4rem 2.9rem]`}

  @media (max-width: 768px) {
    ${tw`w-[120px] h-[120px]`}
  }
`

// ServiceContent
export const ServiceContent = styled.div`
  ${tw`px-[1rem]`}

  h4 {
    ${tw`my-[0.5rem] tracking-[0.13px]`}
  }

  p {
    ${tw`my-[1.2rem] text-sm leading-[21px] tracking-[1.5px]`}
  }

  @media (max-width: 768px) {
    h4 {
      ${tw`text-base`}
    }

    p {
      ${tw`text-xs leading-[18px]`}
    }
  }
`
