import Image1 from '../assets/Blogs/blog-1.svg'
import Image2 from '../assets/Blogs/blog-2.svg'
import Image3 from '../assets/Blogs/blog-3.svg'

export const blogCardData = [
  {
    category: 'Consultation',
    title: 'How much does a consultation cost at our clinic?',
    description:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
    buttonText: 'Read More',
    imageSrc: Image1,
    onClick: () => alert('Consultation clicked!'),
  },
  {
    category: 'Beauty',
    title: "Watch out! don't choose the wrong beauty product",
    description:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
    buttonText: 'Read More',
    imageSrc: Image2,
    onClick: () => alert('Consultation clicked!'),
  },
  {
    category: 'Treatments',
    title: 'About skin care you need to know',
    description:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
    buttonText: 'Read More',
    imageSrc: Image3,
    onClick: () => alert('News clicked!'),
  },
]
