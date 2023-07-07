// styled import
import styled from '@emotion/styled';
import { ProjectList } from '@/types/project'

interface Props {
  project: ProjectList;
}

export const Content = ({ project }: Props) => {
  return (
    <ContentBox>
      <div className='intro'>
        {project?.intro.map(({ title, content }, idx) => (
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
        {project?.info.map(({ title, href, content }, idx) => (
          <div key={idx} className='info-box'>
            <h6>{title}</h6>
            {href && <a href={href} target="_blank" className='info-text' aria-label='프로젝트 링크'>{href}</a>}
            {content && <div className='info-text'>{content}</div>}
          </div>
        ))}
      </div>
    </ContentBox>
  )
}

const ContentBox = styled.div`
  width: 50vw;
  margin:  auto;
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
  }
  a {
    width: 40vw;
    word-break: break-all;
    text-decoration: none;
    color: #676767;
  }
  .info-text {
    width: 40vw;
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

  @media (max-width: 900px) {
    width: 70vw;
    .info-box {
      flex-direction: column;
    }
    h6 {
      margin: 0.5rem 0;
      width: 100%;
    }
    a, .info-text { 
      width: 70vw;
      line-height: 1.3rem;
    }
  }
`