import tw, { styled } from 'twin.macro'

export const HeaderSection = styled.div`
  ${tw`bg-cover bg-no-repeat py-[41px] mb-[30px]`}
  background-image: url('../../../assets/background/bg-header.svg');

  @media (max-width: 1024px) {
    background-image: none;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`

export const AboutBackground = styled.img`
  // ${tw`absolute top-[1311px] left-[67.2%] transform translate-x-[-50%] scale-[0.79] z-[-99] w-full max-w-[1200px]`}

  // @media (max-width: 1024px) {
  //   ${tw`max-w-full`}
  //   top: auto;
  //   left: 50%;
  //   transform: translateX(-50%) scale(1);
  // }

  // @media (max-width: 480px) {
  //   ${tw`max-w-full`}
  //   top: auto;
  //   left: 50%;
  //   transform: scale(1);
  // }
`
