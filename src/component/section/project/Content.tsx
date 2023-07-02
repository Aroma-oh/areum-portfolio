// styled import
import styled from '@emotion/styled';
// recoil import
import { useRecoilValue } from 'recoil';
import { selectProject } from '@/recoil/atoms';
// data
import { PROJECTS } from '@/constants/project'

export const Content = () => {
  const selectedProject = useRecoilValue(selectProject);
  const { intro, info } = PROJECTS[selectedProject];

  return (
    <ContentBox>
      <div className='intro'>
        {intro.map(({ title, content }, idx) => (
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
        {info.map(({ title, href, content }, idx) => (
          <div key={idx} className='info-box'>
            <h6>{title}</h6>
            {href && <a href={href}>{href}</a>}
            <div>{content}</div>
          </div>
        ))}
      </div>
    </ContentBox>
  )

}

const ContentBox = styled.div`

  width: 50vw;
  h5 {
    margin: 2.5rem 0 0.5rem 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #1876d1;
  }
  p {
    margin-bottom: 0.8rem;
  }
  h6 {
    width: 10vw;
    font-size: 1rem;
    font-weight: 600;
    color: #1876d1;
    +div {
      width: 40vw;
    }
  }
  a {
    text-decoration: none;
    color: #676767;
  }
  .content {
    line-height: 1.3rem;
  }
  .intro, .info {
    margin: 2rem auto;
  }
  .info-box {
    display: flex;
    height: fit-content;
    margin: 1rem 0;
  }
`