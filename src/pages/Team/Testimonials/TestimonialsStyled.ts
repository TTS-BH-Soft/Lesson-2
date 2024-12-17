import tw, { styled } from 'twin.macro'

// Container for the entire section
export const Container = tw.div`relative w-full bg-white py-16 px-4 md:px-8`

// Section Title
export const SectionTitle = tw.div`text-center mb-8`
export const Title = tw.h3`text-pink-500 font-semibold`
export const Heading = tw.h2`text-3xl md:text-4xl font-bold text-blue-900`
export const Description = tw.p`text-gray-500 mt-2`

// Testimonial Wrapper
export const TestimonialWrapper = tw.div`relative flex items-center justify-center`

// Navigation Buttons (Positioned at the left and right of the screen)
export const NavigationButton = styled.button(() => [
  tw`absolute top-1/2 transform -translate-y-1/2 text-blue-900 text-3xl 
     bg-gray-100 rounded-full shadow-md p-4 cursor-pointer transition hover:bg-gray-200`,
])

export const NavigationButtonLeft = styled(NavigationButton)(() => [
  tw`left-4 md:left-10`,
])

export const NavigationButtonRight = styled(NavigationButton)(() => [
  tw`right-4 md:right-10`,
])

export const TestimonialCard = tw.div`flex flex-col items-center text-center max-w-2xl px-4`
export const Image = tw.img`w-20 h-20 rounded-full mb-4 object-cover`
export const Text = tw.p`text-gray-500 leading-relaxed mb-4`
export const StarRating = tw.div`flex space-x-1 text-yellow-400`
