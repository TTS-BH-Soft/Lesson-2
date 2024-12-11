import tw from 'twin.macro'

export const HeroBox = tw.div`
  max-w-[1140px]
  h-[795px]
  my-[5.1rem] mx-auto
  mb-[8.5rem]
`

export const ContentBox = tw.div`
  max-w-[732px]
  h-[197px]
  py-[0.7rem]
`

export const Title = tw.h5`
  tracking-[1px]
`

export const Heading = tw.h2`
  tracking-[0.3px]
`

export const Description = tw.p`
  mt-[1.2rem]
  tracking-[1.63px]
  max-w-[680px]
`

export const ImageBox = tw.div`
  mt-[3.8rem]
  relative
`

export const PlayButton = tw.div`
  cursor-pointer 
  inline-flex 
  justify-center
  items-center 
  rounded-full 
  transition-all 
  duration-300 
  absolute
  top-1/2 
  left-1/2 
  transform 
  -translate-x-1/2 
  -translate-y-1/2
`
