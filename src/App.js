import React from 'react'
import Header from './components/header/Header'
import TopContent from './components/TopContent/topContent'
import SkillContent from './components/skillContent/skillContent'
import WorkContent from './components/workContent/workContent'
import "./App.css"
import ExContent from './components/experience/exContent'
import ConBox from './components/Contect/conBox'

function App() {
  return (
    <div>
      <Header></Header>
      <TopContent></TopContent>
      <SkillContent></SkillContent>
      <WorkContent></WorkContent>
      <ExContent></ExContent>
      <ConBox></ConBox>
    </div>
  )
}

export default App
