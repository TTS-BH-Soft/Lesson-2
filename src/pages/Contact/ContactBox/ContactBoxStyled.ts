import tw, { styled } from 'twin.macro'

export const Section = tw.div`
  mt-[4.5rem]
  mx-auto
  max-w-[1140px]
`

export const Title = tw.h5`
  text-left
`

export const Content = tw.div`
  flex
  justify-between
  mt-[1.4rem]
`

export const Heading = tw.h2`
  w-[615px]
`

export const Paragraph = tw.p`
  w-[407px]
`

export const FormContainer = styled.div`
  ${tw`flex items-start`}

  form {
    ${tw`max-w-[520px]`}
  }

  ${tw`lg:flex-col lg:items-center lg:pt-[100px] sm:pt-[80px]`}
`

export const ImageContainer = styled.div`
  ${tw``}

  img {
    ${tw`max-w-[520px] h-[614px] mt-[2.8rem]`}
  }

  @media (max-width: 1024px) {
    ${tw`m-0 text-center`}

    img {
      ${tw`w-[70%] h-auto`}
    }
  }

  @media (max-width: 768px) {
    img {
      ${tw`w-full mt-[1.5rem]`}
    }
  }
`
