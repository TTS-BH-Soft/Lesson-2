import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    ${tw`antialiased`}
    max-width: 1440px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #091156;
    font-weight: 500;
  }

  p {
    color: #8b8b8b;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.1em;
  }

  h1 {
    font-size: 48px;
    line-height: 60px;
  }

  h2 {
    font-size: 36px;
    line-height: 45px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    color: #ff64ae;
    font-size: 16px;
  }

  .btn {
    color: #ffffff;
    background-color: #ff64ae;
    max-width: 248px;
    max-height: 58px;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 50px;
    padding: 1rem 2rem;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #d91c6b;
  }

  #footer {
    background: url("./assets/background/bg-footer.svg");
    background-repeat: no-repeat;
    background-position: top left;
    background-size: cover;
    color: #d7dbff;
    padding: 49px 20px;
    width: 100%;
    height: 705px;
    position: relative;
  }

  @media screen and (max-width: 1024px) {
    #footer {
      width: auto;
      height: auto;
      padding: 0;
      background-size: cover;
    }

    body {
      margin: 0 auto;
    }

    .about-us__bg {
      left: 60%;
    }
  }

  @media screen and (max-width: 768px) {
    h5, p {
      font-size: 0.9rem;
    }

    h2 {
      font-size: 1.5rem;
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
