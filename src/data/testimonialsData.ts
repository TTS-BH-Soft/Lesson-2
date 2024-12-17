import Image from '../assets/Team/testimonial.svg'

export type Testimonial = {
  id: number
  image: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: Image,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.',
    rating: 5,
  },
  {
    id: 2,
    image: Image,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut',
    rating: 4,
  },
  {
    id: 3,
    image: Image,
    text: 'Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.',
    rating: 5,
  },
]
