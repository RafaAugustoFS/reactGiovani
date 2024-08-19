import Header from "./components/header"
import Card from "./components/card/card"
import Banner from "./components/banner/banner"
import BannerCard from "./components/bannerCard/bannerCard"
import BannerJogos from "./components/bannerJogos/bannerJogos"
import "./app.css"
import Form from "./components/Form/form"



function App() {
  

  return (
    <>
      <Header/>

      <Card />

      <Banner/>
        
      <BannerCard 
        titulo="Banner principal New"
        subTitulo="Lorem ipsum New"
      />
      
      <BannerCard 
        titulo="Banner principal New"
        subTitulo="Lorem ipsum New"
      />
      <Form/>

      <BannerJogos
        timeCasa="fortaleza"
        timeVisitante="Corinthians"
      />
    </>
  )
}

export default App
