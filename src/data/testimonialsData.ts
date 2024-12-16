export type Testimonial = {
  id: number
  image: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: '../assets/Team/testimonial.jpeg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam lorem.',
    rating: 5,
  },
  {
    id: 2,
    image: '../assets/Team/testimonial.jpeg',
    text: 'Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam.',
    rating: 4,
  },
  {
    id: 3,
    image: '../assets/Team/testimonial.jpeg',
    text: 'Lorem diam dignissim amet fermentum elementum dui. Pellentesque feugiat.',
    rating: 5,
  },
]
