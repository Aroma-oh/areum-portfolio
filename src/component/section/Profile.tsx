import styled from '@emotion/styled';
import { PROFILE } from '@/constants/profile'

const Profile = () => {
  return (
    <>
      <ProfileBox id='Profile' >
        <h4>Profile</h4>
        <div className='card-container'>
          {PROFILE.map((el) => (
            <CardBox key={el.type}>
              <div className='content-box'>
                <div className='icon'>{el.icon}</div>
                <div className='text-box'>
                  <p className='type'>{el.type}</p>
                  <p className='text'>{el.content}</p>
                </div>
              </div>
            </CardBox>
          ))}
        </div>
        <hr />
      </ProfileBox>
    </>
  )
}

const ProfileBox = styled.section`
  height: 200px;
  padding: 7% 2.5%;
  display: flex;
  flex-direction: column;

  h4 {
    align-self: center;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 3rem;
  }
  .card-container {
    width: 100%;
    height: 100%;
    margin-bottom: 5.5rem;

    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  hr {
    width: 100%;
    border: solid 0.5px #97a8b287;
    margin: 0;
  }
`

const CardBox = styled.div`
  width: 65%;
  height: 90%;
  margin: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;

  .content-box {
    display: flex;
    padding: 26px;
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 21px;
    align-self: center;
  }
  .text-box {
    line-height: 1.2rem;
  }
  .type { 
    font-size: 0.9rem;
    font-weight: 700;
  }
`

export default Profile;