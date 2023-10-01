import React from 'react'
import SecondSection from '../Components/SecondSection/SecondSection'
import PhotoCall from '../Components/PhotoCall/PhotoCall'
import Info from '../Components/Info/Info'
import QuestionSection from '../Components/QuestionSection/QuestionSection'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ClientSection from '../Components/ClientSection/ClientSection'
import NewInfo from '../Components/Info/newInfo'

const Page = () => {
  return (
    <div>
        <Header />
        <SecondSection />
        <PhotoCall />
        <NewInfo />
        <Info />
        <ClientSection />

        <QuestionSection />

        <Footer />

    </div>
  )
}

export default Page