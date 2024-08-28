import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import './layout.css'

type Props = {
  children: React.ReactNode;
}

const layout = ({children}: Props) => {
  return (
    <main>
      <Navbar/>
      <div>{children}</div>
      <Footer/>
    </main>
  )
}

export default layout;