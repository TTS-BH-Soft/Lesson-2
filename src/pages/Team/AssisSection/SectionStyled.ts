import tw from 'twin.macro'

export const AssisContainer = tw.div`
    my-[10rem]
`

export const ContentBox = tw.div`
  flex justify-center flex-col items-center
`

export const SectionTitle = tw.h5`
  leading-6 tracking-[0.2px] mt-1 [font-weight: 600]
`
export const MainTitle = tw.h2`
  tracking-[0.19px] mx-0 my-[0.25em] [font-weight: 600]
`
export const Description = tw.p`
  text-[#8b8b8b] text-base tracking-[1.6px] font-normal mx-0 my-[0.7em]
  // sm:(max-w-[350px] mx-auto text-sm)
`
