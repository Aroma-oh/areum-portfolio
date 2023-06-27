import styled from '@emotion/styled';
import { useMoveToSection } from '@/hooks/useMoveToSection';

const Contact = () => {
  const { sectionRef } = useMoveToSection();

  return (
    <ContactBox id='Contact' ref={sectionRef}>
      Contact
    </ContactBox>
  )
}

const ContactBox = styled.section`
    height: 500px;
    background-color: #00ff15;
`

export default Contact;