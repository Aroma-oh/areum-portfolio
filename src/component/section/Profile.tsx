import styled from '@emotion/styled';
import { PROFILE } from '@/constants/profile';
import { motion } from 'framer-motion';

const Profile = () => {

  return (

    <ProfileBox id='about'>
      <ul>
        <li>
          <span className='underline'><span className='strong'>문제</span>에서 기회를 포착</span>하고, <br /><span className='strong'>해결</span>을 통한 <span className='strong'>성취감</span>을 좋아합니다.</li>
        <li>
          일상에서 마주한 불편함으로, <br /> 더 나은 <span className='underline'><span className='strong'>사용자 경험</span>에 대해 고민</span>합니다. </li>
      </ul>
      <div className='card-container'>
        {PROFILE.map(({ icon, type, content }, index) => (
          <CardBox
            key={type}
            animate={{
              opacity: 1,
              scale: 1.2,
            }}
            transition={{
              repeat: Infinity,
              type: 'spring',
              mass: 3,
              delay: index * 0.2,
            }}
          >
            <motion.div className='content-box'>
              <div className='icon'>{icon}</div>
              <div className='text-box'>
                <p className='type'>{type}</p>
                <p className='text'>{content}</p>
              </div>
            </motion.div>
          </CardBox>
        ))}
      </div>
    </ProfileBox>
  )
}

const ProfileBox = styled.section`
  min-height: calc(100vh - 84px);
  width: fit-content;
  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


  ul {
    font-family: 'HakgyoansimWoojuR';

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  li {
    width: 30vw;
    font-size: 2rem;
    line-height: 3rem;
    margin: 2rem 8rem 4rem 8rem;
  }
  .strong {
    font-size: 2.5rem;
    font-weight: 800;
  }
  .underline {
    background-image: linear-gradient(90deg, #95DAC1, #fffd7f);
    background-position: bottom;
    background-size: 100% 30%;
    background-repeat: no-repeat;
  }
  .card-container { 
    margin-bottom: 3rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }
`

const CardBox = styled(motion.div)`
  width: 270px;
  min-width: 200px;
  height: 100px;
  margin: 1.2rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;

  font-family: 'SUIT-Regular';

  .content-box {
    padding: 26px;
    display: flex;
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 21px;
    align-self: center;
  }
  .text-box {
    line-height: 1.2rem;
    word-break: break-word;
  }
  .type { 
    font-weight: 900;
    font-size: 0.9rem;
  }
`

export default Profile;