import { useState } from 'react'
import faqData from '../../../data/faqData'
import {
  FAQContainer,
  FAQHeader,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
} from './FAQStyled'
// import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function FAQ(): JSX.Element {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <FAQContainer>
      <FAQHeader>Services FAQ's</FAQHeader>

      {faqData.map(faq => (
        <FAQItem key={faq.id} onClick={() => toggleFAQ(faq.id)}>
          <FAQQuestion isOpen={openId === faq.id}>
            {faq.question}
            {/* {openId === faq.id ? <FiChevronUp /> : <FiChevronDown />} */}
          </FAQQuestion>
          {openId === faq.id && <FAQAnswer>{faq.answer}</FAQAnswer>}
        </FAQItem>
      ))}
    </FAQContainer>
  )
}
