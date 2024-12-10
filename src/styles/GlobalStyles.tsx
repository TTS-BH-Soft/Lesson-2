import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&display=swap");

  * {
    ${tw`m-0 p-0 box-border`}
    font-family: 'Poppins', sans-serif;
  }

  body {
    ${tw`antialiased`}
    font-family: 'Poppins', sans-serif;
    max-width: 1440px;
  }

  h1, h2, h3, h4, h5, h6 {
    ${tw`text-[#091156] font-medium`}
  }

  p {
    ${tw`text-[#8b8b8b] text-base font-light tracking-wider`}
  }

  h1 {
    ${tw`text-[48px] leading-[60px]`}
  }

  h2 {
    ${tw`text-[36px] leading-[45px]`}
  }

  h4 {
    ${tw`text-[18px]`}
  }

  h5 {
    ${tw`text-[#ff64ae] text-[16px]`}
  }

  .btn {
    ${tw`
      text-white bg-[#ff64ae] max-w-[248px] max-h-[58px] w-full h-full
      border-none rounded-full p-4 text-[16px] leading-[24px] cursor-pointer
      transition duration-300
    `}
  }

  .btn:hover {
    ${tw`bg-[#d91c6b]`}
  }

  @media screen and (max-width: 1024px) {
    #footer {
      ${tw`w-auto h-auto p-0 bg-cover`}
    }

    body {
      ${tw`mx-auto`}
    }

    .about-us__bg {
      left: 60%;
    }
  }

  @media screen and (max-width: 768px) {
    h5, p {
      ${tw`text-sm`}
    }

    h2 {
      ${tw`text-[1.5rem]`}
    }

    .about-us__bg {
      left: 60%;
    }
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
