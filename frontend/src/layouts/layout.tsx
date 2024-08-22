import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import './layout.css'

type Props = {
  children: React.ReactNode;
}

const layout = ({children}: Props) => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div>{children}</div>
      <Footer/>
    </main>
  )
}

export default layout;