import { useState } from "react";
import './MenuPage.css'
import Hero from "../../components/Hero/Hero";
import TabButton from "../../components/TabButton";
import {MENU, MenuItem} from '../../constants/menu'


const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('BÁNH MÌ')

  function handleSelect(selectedButton: string){
    setSelectedCategory(selectedButton);
  }

  const renderItems = (items?: MenuItem[])=>items?.map((item)=>(
    <div className="app__menu-page-item p__montserrat">
                <p>{item.name}</p>
                <p>{item.price!=0?`$${item.price}`:'$'}</p>
    </div>));

  let tabContent;

  for(let i=0; i<MENU.length; i++){
    if(MENU[i].name===selectedCategory){
      if(MENU[i].subsections?.length){
        tabContent=(
          <div className="app__menu-tab flex__center">
            {MENU[i].subsections?.map((subsection)=>
              <div className="app__menu-page">
                <img src={subsection.image} alt={subsection.name}/>
                <h1 className="p__montserrat">{subsection.name}</h1>
                {renderItems(subsection.items)}
              </div>)}
          </div>
        );
      }else{
        tabContent=(
          <div className="app__menu-tab flex__center">
          <div className="app__menu-page">
            <img src={MENU[i].image} alt={MENU[i].name}/>
            <h1 className="p__montserrat">{MENU[i].name}</h1>
            {renderItems(MENU[i].items)}
            </div>
          </div>
        );
      }
    }
  }

  return (
    <>
      <Hero><h1 className="headtext__montserrat">OUR MENU</h1></Hero>
      <section className="app__menu container section__padding flex__center">
        <menu className="flex__center app__menu-buttons-container">
        {MENU.map((section) => (
          <TabButton key={section.name} isSelected={selectedCategory === section.name} 
                    onSelect={() => handleSelect(section.name)}>
            {section.name}
          </TabButton>))}
        </menu>
        {tabContent}
      </section>
    </>);
}

export default MenuPage;