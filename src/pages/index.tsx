import Header from "@/component/layout/Header"
import Intro from "@/component/section/Intro"
import Profile from "@/component/section/Profile"
import Project from '@/component/section/project/Project'
import Skill from '@/component/section/Skill'
import Contact from '@/component/section/Contact'
// firebase import
import { getDbAllData } from '@/util/firebase';
// next import 
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export default function Home({ ssrData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header />
      <Intro />
      <Profile />
      <Skill />
      <Project ssrData={ssrData} />
      <Contact />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const fetchedData = await getDbAllData('project');
    console.log(fetchedData)
    return {
      props: {
        ssrData: fetchedData,
      },
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      props: {
        data: [],
      },
    };
  }
};