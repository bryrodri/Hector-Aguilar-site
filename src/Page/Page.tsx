import React from 'react'
import SecondSection from '../Components/SecondSection/SecondSection'
import PhotoCall from '../Components/PhotoCall/PhotoCall'
import Info from '../Components/Info/Info'
import QuestionSection from '../Components/QuestionSection/QuestionSection'
import Header from '../Components/Header/Header'

const Page = () => {
  return (
    <div>
        <Header />
        <SecondSection />
        <PhotoCall />
        <Info />

        <QuestionSection />

    </div>
  )
}

export default Page