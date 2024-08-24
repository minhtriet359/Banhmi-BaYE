import ContactForm from "../components/ContactForm/ContactForm";
import Hero from "../components/Hero/Hero";

const ContactPage = () => {
  return (
  <>
    <Hero><h1 className="headtext__montserrat">CONTACT US</h1></Hero>
    <section className="container section__padding">
      <ContactForm/>
    </section>
  </>);
}

export default ContactPage;