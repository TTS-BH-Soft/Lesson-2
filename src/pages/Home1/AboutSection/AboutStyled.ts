import tw from 'twin.macro'

export const Section = tw.section`
  flex justify-center items-center my-16 mx-20
  // lg:flex-col lg:mx-5 lg:my-10 lg:text-center
`

export const InfoBox = tw.div`
  w-[664px]
  // lg:w-full lg:flex lg:flex-col lg:items-center lg:text-center
`

export const Header = tw.div`
  mb-2
`

export const Title = tw.h5`
  mb-2 text-lg font-semibold
  // lg:text-base
`

export const Subtitle = tw.h2`
  mb-4 font-semibold text-2xl
  // lg:text-xl
`

export const Content = tw.div`
  max-w-[483px] leading-6 text-gray-600
  // lg:text-sm lg:leading-5 lg:w-[350px]
`

export const Paragraph = tw.p`
  mb-6 leading-6 tracking-wide
  // lg:mb-4
`

export const ButtonContainer = tw.div`
  mt-10 flex justify-start
  // lg:mt-4 lg:justify-center lg:items-center
`

export const Button = tw.button`
  w-[200px] h-[58.36px] tracking-wider text-white bg-pink-500 rounded-lg shadow-lg
  // lg:h-12 lg:text-xs lg:mr-4
`

export const Link = tw.a`
  flex items-center ml-10 text-gray-500 no-underline 
  // lg:ml-0
`

export const LinkText = tw.span`
  ml-2 text-sm tracking-wide
  // lg:text-xs lg:ml-0
`

export const ImageContainer = tw.div`
  flex justify-center items-center pt-10 max-w-[476px]
  // lg:max-w-full lg:pt-0
`

export const Image = tw.img`
  w-full h-auto
`
