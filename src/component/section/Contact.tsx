// styled, emailjs library import 
import styled from '@emotion/styled';
import emailjs from '@emailjs/browser'
// mui import
import Alert from '@mui/material/Alert';
// react, custom hook, validation import
import { useState, useRef, useEffect, FormEvent } from 'react'
import { useInput } from '@/hooks/useInput'
import { useMoveToSection } from '@/hooks/useMoveToSection';
import { emailValidation } from '@/util/validation'
// confetti, loading library import
import JSConfetti from 'js-confetti'
import ReactLoading from 'react-loading';


const Contact = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const [form, onChange, reset] = useInput({
    name: '',
    email: '',
    content: '',
  });

  // 메일 전송 로딩을 위한 상태
  const [isLoading, setIsLoading] = useState(false);

  // alert 메세지를 위한 상태
  const [isMailSent, setIsMailSent] = useState(false);
  const [isMailFailed, setIsMailFailed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsMailSent(false);
      setIsMailFailed(false);
      setIsValidEmail(true);
    }, 3000);
  }, [isMailSent, isMailFailed, isValidEmail]);


  const { handleMove } = useMoveToSection();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    handleMove('contact');

    if (!emailValidation.test(form.email)) {
      return setIsValidEmail(false);
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY!,
      )
      setIsMailSent(true);
      reset();
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ['🌱', '💌'],
        emojiSize: 50,
        confettiNumber: 100,
      });
    } catch (error) {
      setIsMailFailed(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ContactBox id='contact' >
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
                value={form.name}
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
          <ButtonBox
            className='button'
            onClick={handleSubmit}
          > {isLoading
            ? <ReactLoading type='spin' color='#5d5d5d' height='20px' width='20px' />
            : <div className='text'> send </div>
            }
          </ButtonBox>
        </form>
      </MailBox>
    </ContactBox>
  )
}
const ButtonBox = styled.button`
  width: 100px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 18px;
  box-shadow: 0px 0px 15px rgba(149, 160, 165, 0.3);
  background-color: transparent;

  cursor: pointer;

  .text {
    margin: 0 0.5rem;
    font-size: 1rem;
    color: #5d5d5d;
  }
`
const ContactBox = styled.section`
  padding: 0 2.5%;
  height: 100vh ;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  position: relative;

  font-family: 'SUIT-Regular';

  .alert {
    width: 50%;
    position: relative;
    animation: slideIn 3s ease-in-out;
  }
  @keyframes slideIn {
    0% {
      transform: translateY(0vh);
      opacity: 0;
    }
    25% {
    transform: translateY(13vh);
    opacity: 1;
    }
    75% {
    transform: translateY(13vh);
    opacity: 1;
    }
    100% {
      transform: translateY(0vh);
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
  margin-top: 6vh;

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

  @media(max-width: 600px) {
    width: 80%;
    .name, .email, .content, .info {
      width: 60vw;
    }
  }
`

export default Contact;