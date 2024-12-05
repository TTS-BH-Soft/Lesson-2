import tw from 'twin.macro'

export const SliderContainer = tw.div`
  relative top-[213px] left-[189px] h-[542px] max-w-[1098px]
  lg:top-[100px] lg:left-0 lg:h-auto lg:px-4
  sm:px-2
`

export const SliderContent = tw.div`
  flex justify-center transition-transform duration-500
  lg:flex-col lg:items-center lg:justify-center
`

export const SliderText = tw.div`
  flex-1
  lg:text-center lg:mb-4
`

export const Title = tw.h1`
  w-[430px] h-[128px]
  lg:text-xl lg:leading-[1.2] lg:mx-auto lg:h-[60px]
  sm:text-[1.2rem]
`

export const Paragraph = tw.p`
  text-[#091156] w-[474px] h-[54px] m-0 font-medium leading-[24px]
  lg:text-sm lg:leading-[1.5]
  sm:text-[0.8rem] sm:w-full sm:px-12
`

export const Button = tw.button`
  w-[200px] mt-[27px] ml-[1px] leading-[23px] tracking-[1.65px] cursor-pointer
  lg:text-sm lg:mt-4
`

export const ImageContainer = tw.div`
  w-[602px] h-[398px] relative top-[-56px]
  lg:top-0
//   md:h-auto md:top-0 md:flex md:justify-center
//   sm:w-[430px]
//   img {
//     max-w-[602px]
//     md:h-[300px]
//     sm:max-w-[350px]
//   }
`

export const SliderControls = tw.div`
  flex items-center justify-between absolute top-[89.3%] left-[553px] transform translate-x-[-80%] translate-y-[-50%] w-[71px]
  lg:bottom-4 lg:w-[50px] lg:static lg:mx-auto lg:mt-8 lg:transform-none
`

export const Dot = tw.div`
  w-[15px] h-[3px] bg-[#eeeeee] rounded-full transition-all cursor-pointer
  [&.active]:bg-[#414880] [&.active]:w-[25px] [&.active]:h-[8px] [&.active]:rounded-full
  lg:w-[10px] lg:h-[2px]
  [&.active]:lg:w-[15px] [&.active]:lg:h-[4px]
`
