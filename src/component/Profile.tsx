import styled from '@emotion/styled';
import { useScroll } from '@/hooks/useScroll';
// import { useMoveToSection } from '@/hooks/useMoveToSection';


const Profile = () => {
  const { sectionRef } = useScroll();

  return (
    <ProfileBox id='Profile' ref={sectionRef}>
      이름, 이메일, 연락처
    </ProfileBox>
  )
}

const ProfileBox = styled.section`
    height: 150vh;
    background-color: #ffd000;
`

export default Profile;