/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro'

export const Container = tw.div`relative w-full bg-white py-16 px-4 md:px-8`
export const SectionTitle = tw.div`text-center mb-8`
export const Title = tw.h3`text-pink-500 font-semibold`
export const Heading = tw.h2`text-3xl md:text-4xl font-bold text-blue-900`
export const Description = tw.p`text-gray-500 mt-2`

export const TestimonialWrapper = tw.div`flex items-center justify-center relative`
export const NavigationButton = styled.button(() => [
  tw`absolute top-1/2 transform -translate-y-1/2 text-blue-900 text-3xl`,
])

export const TestimonialCard = tw.div`flex flex-col items-center text-center max-w-2xl px-4`
export const Image = tw.img`w-20 h-20 rounded-full mb-4 object-cover`
export const Text = tw.p`text-gray-500 leading-relaxed mb-4`
export const StarRating = tw.div`flex space-x-1 text-yellow-400`
