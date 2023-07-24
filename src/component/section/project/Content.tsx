// styled import 
import styled from '@emotion/styled';
// type import
import { ProjectList } from '@/types/project';

interface Props {
  project: ProjectList;
};

export const Content = ({ project }: Props) => {
  return (
    <ContentBox>
      <div className='intro'>
        {project.intro.map(({ title, content }, idx) => (
          <div key={idx}>
            <h5>{title}</h5>
            {content.map((paragraph, idx) => (
              <div key={`${idx} content`} className='content'>
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='info'>
        {project.info.map(({ title, content }, idx) => (
          <div key={idx} className='info-box'>
            <h6>{title}</h6>
            <div className='info-text'>{content}</div>
          </div>
        ))}
      </div>
    </ContentBox>
  )
};

const ContentBox = styled.div`
  width: 35vw;
  margin-left: 5rem;  
  color: #565656;
  word-break: break-all;

  h5 {
    margin: 2rem 0 0.8rem 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #000000c8;
    width: fit-content;

    background-image: linear-gradient(90deg, #95DAC1, #fffd7f);
    background-position: bottom;
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
  .info {
    margin-top: 1.8rem;
  }
  .content {
    margin-bottom: 0.6rem;
    line-height: 1.4rem;
  }
  h6 {
    font-size: 1rem;
    font-weight: 600;
    color: #000000c8;
    margin: 0.8rem 0;
    width: fit-content;

    background-image: linear-gradient(90deg, #95DAC1, #fffd7f5a);
    background-position: bottom;
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
`

