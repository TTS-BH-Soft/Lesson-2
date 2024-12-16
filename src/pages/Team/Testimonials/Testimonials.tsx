import { useState } from 'react'
import {
  Container,
  SectionTitle,
  Title,
  Heading,
  Description,
  TestimonialWrapper,
  NavigationButton,
  TestimonialCard,
  Image,
  Text,
  StarRating,
} from './TestimonialsStyled'
import { testimonials } from '../../../data/testimonialsData'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevTestimonial = () =>
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))

  const nextTestimonial = () =>
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))

  const currentTestimonial = testimonials[currentIndex]

  return (
    <Container>
      <SectionTitle>
        <Title>Our Testimonials</Title>
        <Heading>What our customer says</Heading>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </Description>
      </SectionTitle>

      <TestimonialWrapper>
        <NavigationButton onClick={prevTestimonial}>&#8592;</NavigationButton>

        <TestimonialCard>
          <Image src={currentTestimonial.image} alt="Customer" />
          <Text>{currentTestimonial.text}</Text>
          <StarRating>
            {Array(currentTestimonial.rating)
              .fill(0)
              .map((_, index) => (
                <span key={index}>&#9733;</span>
              ))}
          </StarRating>
        </TestimonialCard>

        <NavigationButton onClick={nextTestimonial}>&#8594;</NavigationButton>
      </TestimonialWrapper>
    </Container>
  )
}
