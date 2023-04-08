import React, { useEffect, useState } from 'react'
import './Firebase/fb'
import {
  getFirestore, collection, getDocs,
} from 'firebase/firestore'
import './App.css'
import NavBar from './components/NavBar'
import BottomToolBar from './components/BottomToolBar'
import Testimonio from './components/Testimonio'
import Sources from './components/Sources'
import Courses from './components/Courses'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const queryDB = getFirestore()
    const queryCollection = collection(queryDB, 'images')
    getDocs(queryCollection) // trayendo el doc
      .then((res) => setData(res.docs.map((image) => ({ id: image.id, ...image.data() }))))
  }, [])

  return (
    <>
      <NavBar logo={data[1]} />
      <BottomToolBar
        group={data[4]}
        company={data[3]}
      />

      <Sources
        companies={data[5]}
        bgImage={data[6]}
      />
      <Testimonio
        img={data[0]}
        alternative="Picture Shawn"
        nombre="Shawn Wang"
        pais="Singapore"
        cargo="Software Engineer"
        empresa="Amazon"
        testimonio="It's scary to change careers. I only gained
        confidence that I could code by working through the hundreds
        of hours of free lessons on freeCodeCamp. Within a year I had a
        six-figure job as a Software Engineer. freeCodeCamp changed my life."
      />
      <Testimonio
        img={data[7]}
        alternative="Picture Sarah"
        nombre="Sarah Chima"
        pais="Nigeria"
        cargo="Software Engineer"
        empresa="ChatDesk"
        testimonio="freeCodeCamp was the gateway to my career as
        a software developer. The well-structured curriculum took
        my coding knowledge from a total beginner level to a very
        confident level. It was everything I needed to land my
        first dev job at an amazing company."
      />
      <Testimonio
        img={data[2]}
        alternative="Picture Emma"
        nombre="Emma Bostian"
        pais="Sweden"
        cargo="Software Engineer"
        empresa="Spotify"
        testimonio="I've always struggled with learning JavaScript.
        I've taken many courses but freeCodeCamp's course was the
        one which stuck. Studying JavaScript as well as data
        structures and algorithms on freeCodeCamp gave me the
        skills and confidence I needed to land my dream job as a
        software engineer at Spotify."
      />
      <Courses />
      <Footer />
    </>
  )
}

export default App
