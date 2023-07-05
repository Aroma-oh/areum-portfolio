// styled import 
import styled from '@emotion/styled';
// icon import
import { BsGithub } from 'react-icons/bs';
import { SiVelog } from 'react-icons/si';


function Footer() {
  return (
    <FooterBox>
      <div>
        Copyright 2023. 오아름. All rights reserved.
      </div>
      <div>
        <a href='https://github.com/Aroma-oh' target="_blank">
          <BsGithub />
        </a>
        <a href='https://velog.io/@on002way' target="_blank">
          <SiVelog />
        </a>
      </div>
    </FooterBox>
  )

}

const FooterBox = styled.section`
  height: 150px;
  margin: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white ;
  color: #acacac;

  div {
    margin: 0.6rem;
    text-align: center;
  }
  a {
    margin: 0 0.6rem;
    font-size: 1.2rem;
    color: #828282;
  }
`

export default Footer;