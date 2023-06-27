import styled from '@emotion/styled';
import { useMoveToSection } from '@/hooks/useMoveToSection';

const Profile = () => {
  const { sectionRef } = useMoveToSection();

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
    background-color: #e7f9ff;
`

export default Profile;