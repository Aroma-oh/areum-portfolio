import Header from "@/component/layout/Header"
import Intro from "@/component/section/Intro"
import Profile from "@/component/section/Profile"
import Project from '@/component/section/project/Project'
import Skill from '@/component/section/skill/Skill'
import Contact from '@/component/section/Contact'
// firebase import
import { getDbAllData } from '@/util/firebase';
// next import 
import { GetServerSideProps } from 'next'
// react query
import { dehydrate, QueryClient } from 'react-query';

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Profile />
      <Skill />
      <Project />
      <Contact />
    </>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('project', () => getDbAllData('project'));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
};
