import styled from '@emotion/styled';
import { useScroll } from '@/hooks/useScroll';

const Contact = () => {
  const { sectionRef } = useScroll();

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