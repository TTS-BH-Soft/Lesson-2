import tw from 'twin.macro'

export const HeroBox = tw.div`
  max-w-[1140px]
  h-[795px]
  mt-[8.3rem]
  mx-auto
  mb-[9rem]
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
  [font-weight: 600]
  my-[0.7rem]
`

export const Description = tw.p`
  mt-[1.2rem]
  tracking-[1.63px]
  max-w-[680px]
`

export const ImageBox = tw.div`
  mt-[4.5rem]
  relative
`

export const PlayButton = tw.div`
[margin-top: 0.3rem]
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
