// import styled, emailjs library
import styled from '@emotion/styled';
import emailjs from '@emailjs/browser'
// import mui
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
// import hook, validation 
import { useInput } from '@/hooks/useInput'
import { useState, useRef, useEffect, FormEvent } from 'react'
import { emailValidation } from '@/util/validation'

const Contact = () => {
  const [form, onChange, reset] = useInput({
    name: '',
    email: '',
    content: '',
  })
  const [isMailSent, setIsMailSent] = useState(false);
  const [isMailFailed, setIsMailFailed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);


  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsMailSent(false);
      setIsMailFailed(false);
      setIsValidEmail(true);
    }, 3000);
  }, [isMailSent, isMailFailed, isValidEmail]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!emailValidation.test(form.email)) {
      return setIsValidEmail(false)
    }

    try {
      emailjs.sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID!,
        process.env.REACT_APP_YOUR_TEMPLATE_ID!,
        formRef.current!,
        process.env.REACT_APP_YOUR_PUBLIC_KEY!,
      )
      setIsMailSent(true);
      reset()

    } catch (error) {
      console.log(error)
      reset()
      setIsMailFailed(true);
    }
  }

  return (
    <ContactBox id='Contact' >
      {isMailSent && <Alert severity="success" className='alert'>메일이 전송되었습니다.</Alert>}
      {isMailFailed && <Alert severity="warning" className='alert'>잠시 후에 다시 시도해주세요.</Alert>}
      {!isValidEmail && <Alert severity="error" className='alert'>이메일을 확인해주세요.</Alert>}
      <MailBox>
        <h4>Contact</h4>
        <form ref={formRef} onSubmit={handleSubmit} >
          <div className='info'>
            <div className='name'>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                name='name'
                onChange={onChange}
                value={form['name']}
                type='text'
              />
            </div>
            <div className='email'>
              <label htmlFor='email'>E-mail</label>
              <input
                id='email'
                name='email'
                onChange={onChange}
                value={form.email}
                type='text'
                className={isValidEmail ? '' : 'error'}
              />
            </div>
          </div>
          <div className='content'>
            <label htmlFor='content'>Message</label>
            <textarea
              id='content'
              name='content'
              onChange={onChange}
              value={form.content}
            />
          </div>
          <Button
            variant="contained"
            size='large'
            sx={{ borderRadius: '21px' }}
            className='button'
            onClick={handleSubmit}
          > send </Button>
        </form>
      </MailBox>
    </ContactBox>
  )
}

const ContactBox = styled.section`
  padding: 0 2.5%;
  height: 91vh ;
  background:linear-gradient(-15deg, transparent 55%, #d5d5d52b 0) right,
        linear-gradient(15deg, transparent 55%, #d5d5d52b 0) left;
  background-size:50% 100%;
  background-repeat:no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  position: relative;

  .alert {
    width: 50%;
    position: relative;
    animation: slideIn 3s ease-in-out;
  }
  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    25% {
    transform: translateY(50%);
    opacity: 1;
    }
    75% {
    transform: translateY(50%);
    opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
`;


const MailBox = styled.div`
  position: absolute;
  top: 15%;
  width: 50%;
  height: fit-content;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 25px;

  h4 {
    margin: 3rem 0 1.5rem 0;
    font-size: 2rem;
    font-weight: 500;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    font-weight: 600;
    margin: 1.2rem 0 0.4rem 0;
  }
  input {
    height: 3vh;
  }
  textarea {
    resize: none;
    height: 10vh;
  }
  input, textarea {
    border: solid 1.8px #2727272b;
    border-radius: 4px;
    :focus {
      box-shadow: 5px 5px #daecff, -5px 5px #daecff, 5px -5px #daecff, -5px -5px #daecff;
    }
  }
  .error {
    border: solid 1.8px #e2716f;
    box-shadow: 5px 5px #faf3f3, -5px 5px #faf3f3, 5px -5px #faf3f3, -5px -5px #faf3f3;
  }
  .name, .email, .content, .info {
    position: relative;
    width: 40vw;
    display: flex;
    flex-direction: column;
  }
  .button {
    margin: 2rem 8rem;
  }
`

export default Contact;