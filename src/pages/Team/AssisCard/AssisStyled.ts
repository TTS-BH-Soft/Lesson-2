import tw from 'twin.macro'

export const AssisContainer = tw.div`
  flex flex-col gap-8 my-[8rem] max-w-[1004px] justify-center mx-auto
`

export const AssisCardContainer = tw.div`
  flex flex-row items-center justify-between
`

export const AssisImage = tw.img`
  rounded-lg w-64 h-40 object-cover
`

export const AssisInfo = tw.div`
  ml-6 max-w-[434px]
`

export const AssisName = tw.h3`
  text-lg font-bold text-[#091156]
`

export const AssisRole = tw.span`
  text-sm font-medium italic text-gray-500
`

export const AssisDescription = tw.p`
  mt-2 text-gray-600 leading-relaxed
`
