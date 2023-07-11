// component import 
import Header from "@/component/layout/header/Header"
import Intro from "@/component/section/Intro"
import Profile from "@/component/section/Profile"
import Project from '@/component/section/project/Project'
import Skill from '@/component/section/skill/Skill'
import Contact from '@/component/section/Contact'
import Footer from '@/component/layout/Footer'
import { Banner } from '@/component/section/Banner'
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
      <Banner />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('project', () => getDbAllData('project'));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
};
