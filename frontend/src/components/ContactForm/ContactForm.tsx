// src/Form.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import './ContactForm.css';

type Props ={
  isHomePage?: boolean;
}

const ContactForm = ({isHomePage = false}: Props) => {
  const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email: '',
        message:'',
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const response = await fetch('https://banhmi-baye.onrender.com/submit-form',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData)
    });
    if(response.ok){
      alert('Form submission successful');
      setFormData({name:'', phone:'', email:'', message:''});
    }else{
      alert("There was an error submitting the form");
    }
  };

  return (
    <form className='container app__contact-form flex__center' onSubmit={handleSubmit}>
        <div className='app__contact-form-content'>
          {isHomePage && (<h1 className='headtext__montserrat'>CONTACT US</h1>)}
          <input className='p__montserrat' type='text' name='name' value={formData.name} 
                placeholder='Enter your name' onChange={handleChange} required/>
          <br/>
          <input className='p__montserrat' type='tel' name='phone' value={formData.phone} 
                placeholder='Enter your phone' onChange={handleChange} required/>
          <br/>
          <input className='p__montserrat' type='email' name='email' value={formData.email} 
                placeholder='Enter your email' onChange={handleChange} required/>
          <br/>
          <textarea className='p__montserrat' name='message' value={formData.message} 
                placeholder='Leave us a message' onChange={handleChange} required/>
          <br/>
          <button className='custom__button app__contact-form-btn'>SUBMIT</button>
        </div>
    </form>
  );
}

export default ContactForm;