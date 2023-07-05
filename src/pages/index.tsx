// component import 
import Header from "@/component/layout/Header"
import Intro from "@/component/section/Intro"
import Profile from "@/component/section/Profile"
import Project from '@/component/section/project/Project'
import Skill from '@/component/section/skill/Skill'
import Contact from '@/component/section/Contact'
import Footer from '@/component/layout/Footer'
// firebase import
import { getDbAllData } from '@/util/firebase';
// next import 
import { GetStaticProps } from 'next'
import Head from 'next/head'
// react query
import { dehydrate, QueryClient } from 'react-query';

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>프론트엔드 오아름 - 포트폴리오</title>
        </Head>
      </div>
      <Header />
      <Intro />
      <Profile />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

// 성능저하 때문에 정적 배포가 더 낫다. 
// 동적으로 필요한 부분만 상태관리로 바꾸기 -> 리액트 쿼리로 서버 상태
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('project', () => getDbAllData('project'));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
};

// db 조회말고 넥스트서버로 보내기
//   / api / project