import tw from 'twin.macro'

export const Form = tw.form`
  flex flex-col gap-8 mt-12
  md:(gap-6 mt-8)
`

export const FormGroup = tw.div`
  flex justify-between gap-9
  md:(flex-col gap-4)
`

export const Input = tw.input`
  h-[61.58px] text-base font-light border border-[#d9ddfe]
  rounded-[15px] pl-6 pb-0.5 mb-1 w-[520px] leading-6
  focus:border-[#ff4da6]
  placeholder:(text-[#c5c5c5] leading-6 tracking-wider)
  md:(w-full)
`

export const Textarea = tw.textarea`
  w-full text-base font-light border border-[#d9ddfe]
  rounded-[15px] pl-6 pt-6 h-[240px] resize-none leading-6
  focus:border-[#ff4da6]
  placeholder:(text-[#c5c5c5] leading-6 tracking-wider)
  md:(h-[180px])
`

export const Button = tw.button`
  my-5 leading-[23px] tracking-wider py-4 px-8 cursor-pointer
  md:(w-full mx-auto my-0)
`
