import Header from "@/component/layout/Header"
import Intro from "@/component/section/Intro"
import Profile from "@/component/section/Profile"
import Project from '@/component/section/project/Project'
import Skill from '@/component/section/Skill'
import Contact from '@/component/section/Contact'



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
