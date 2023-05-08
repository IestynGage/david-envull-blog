import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

interface ContactUsFormProps {
  setToast: (displayToast:boolean) => void;
}

export default function ContactUsForm({ setToast }:ContactUsFormProps) {
  
  const onSubmit = async (event:any) => {
    event.preventDefault();
  
    const data = JSON.stringify({
      email: event.target.formEmail.value,
      subject: event.target.formSubject.value,
      body: event.target.formText.value,
    });
  
    const response = await fetch('/api/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
  
    if (response.ok) {
      setToast(true);
    }
  }

  return (
    <Form onSubmit={onSubmit} >
    <Form.Group className="mb-3" controlId="formEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formSubject">
      <Form.Label>Subject</Form.Label>
      <Form.Control type="text" placeholder="Subject" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formText">
      <Form.Label>Text</Form.Label>
      <Form.Control as="textarea" rows={4} placeholder="Text" />
    </Form.Group>
    <Button variant="primary" type="submit" style={{width:'100%'}}>
      Submit
    </Button>
  </Form>
 
  )
}