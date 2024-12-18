import { Form, FormGroup, Input, Textarea, Button } from './FormStyled'

export default function ContactForm() {
  return (
    <Form action="#" method="post">
      <FormGroup>
        <Input type="text" placeholder="First name" required />
        <Input
          type="text"
          placeholder="Last name"
          required
          style={{ paddingLeft: '1.7rem' }}
        />
      </FormGroup>
      <Input type="email" placeholder="Email address" required />
      <Input type="text" placeholder="Subject message" required />
      <Textarea placeholder="Your inquiry here" rows={4} required />
      <Button type="submit" className="btn">
        Send Message
      </Button>
    </Form>
  )
}
