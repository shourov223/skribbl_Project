
import Background from './components/Background'
import Banner from './components/Banner'
import Categoris from './components/Categoris'
import Footer from './components/Footer'
import Illustration from './components/Illustration'
import Leatest from './components/Leatest'
import Magazine from './components/Magazine'
import More from './components/More'
import ResponsiveNavbar from './components/ResponsiveNavbar'

const App = () => {
  return (
    <>
      <ResponsiveNavbar />
      <Banner/>
      <Illustration/>
      <Leatest/>
      <Background/>
      <Categoris/>
      <More/>
      <Magazine/>
      <Footer/>
    </>
  )
}

export default App
