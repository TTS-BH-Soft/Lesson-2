import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&display=swap");

  * {
  box-border m-0 p-0;
  font-family: "Poppins", sans-serif
  }

  body {
    ${tw`antialiased`}
    font-family: 'Poppins', sans-serif;
    max-width: 1440px;
  }

  h1, h2, h3, h4, h5, h6 {
    ${tw`text-[#091156] [font-weight: 600]`}
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
      text-white bg-[#ff64ae] max-w-[248px] max-h-[58px] text-base leading-6 cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] px-8 py-4 rounded-[50px] border-[none] hover:bg-[#d91c6b]
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
