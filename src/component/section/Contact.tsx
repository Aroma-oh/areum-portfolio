import styled from '@emotion/styled';
import { useInput } from '@/hooks/useInput'
import Button from '@mui/material/Button';
import { FormEvent } from 'react';


const Contact = () => {
  const [form, onChange, reset] = useInput()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <ContactBox id='Contact' >
      <MailBox>
        <h4>Contact</h4>
        <form onSubmit={handleSubmit}>
          <div className='info'>
            <div className='name'>
              <label htmlFor='name'>성함</label>
              <input
                id='name'
                name='name'
                onChange={onChange}
                value={form['name']}
                type='text'
              />
            </div>
            <div className='email'>
              <label htmlFor='email'>이메일</label>
              <input
                id='email'
                name='email'
                onChange={onChange}
                value={form['email']}
                type='text'
              />
            </div>
          </div>
          <div className='content'>
            <label htmlFor='content'>내용</label>
            <textarea
              id='content'
              name='content'
              onChange={onChange}
              value={form['content']}
            />
          </div>
          <Button
            variant="contained"
            size='large'
            sx={{ borderRadius: '21px' }}
          > 보내기 </Button>
        </form>
      </MailBox>
    </ContactBox>
  )
}

const ContactBox = styled.section`
  padding: 0 2.5%;
  height: 800px;
  background:linear-gradient(-15deg, transparent 60%, #d5d5d52b 0) right,
        linear-gradient(15deg, transparent 60%, #d5d5d52b 0) left;
  background-size:50% 100%;
  background-repeat:no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  position: relative;
`;


const MailBox = styled.div`
  width: 50%;
  height: fit-content;
  margin-top: 10%;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;

  h4 {
    margin: 3rem 0;
    font-size: 2rem;
    font-weight: 500;
  }

  label {
    width: 50%;
  }
`

export default Contact;