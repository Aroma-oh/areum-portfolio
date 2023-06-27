import styled from '@emotion/styled';
import { useScroll } from '@/hooks/useScroll';

const Profile = () => {
  const { sectionRef } = useScroll();

  return (
    <>
      <ProfileBox id='Profile' ref={sectionRef}>
        Profile
      </ProfileBox>
    </>
  )
}

const ProfileBox = styled.section`
    height: 500px;
    background-color: #fbd3ed;
`

export default Profile;