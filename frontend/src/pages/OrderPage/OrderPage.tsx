import {useState} from "react";
import Hero from "../../components/Hero/Hero";
import MenuTabButton from "../../components/MenuTabButton";
import MenuTabs from "../../components/MenuTabs/MenuTabs";
import {MENU} from '../../constants/menu'
import cart from '../../assets/cart.png'
import './OrderPage.css'

const OrderPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('BÁNH MÌ')
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  function handleSelect(selectedButton: string){
    setSelectedCategory(selectedButton);
  }

  function toggleDropdown(){
    setIsDropdownVisible(!isDropdownVisible);
  }

  let tabContent=(
    <div className="app__order-menu">
      <div className="app__order-menu-item">
        <img src={MENU[0].items && MENU[0].items[0].image} alt={MENU[0].items && MENU[0].items[0].name}></img>
        <h1 className="p__montserrat">{MENU[0].items && MENU[0].items[0].name}</h1>
        <p className="p__montserrat">${MENU[0].items && MENU[0].items[0].price}</p>
        <button className="custom__button">Order</button>
      </div>
    </div>)

  for(let i=0; i<MENU.length;i++){
    if(MENU[i].name===selectedCategory){
      if(MENU[i].subsections?.length){
        tabContent=(<>
            {MENU[i].subsections?.map((subsection)=> (<>
                <h1 className="p__montserrat" style={{marginTop: '2rem', marginBottom:'2rem'}}>{subsection.name}</h1>
                <div className="app__order-menu">
                  {subsection.items?.map((item)=>(
                    <div className="app__order-menu-item flex__center">
                      <img src={item.image} alt={item.name}></img>
                      <h1 className="p__montserrat">{item.name}</h1>
                      <p className="p__montserrat">${item.price}</p>
                      <button className="custom__button">Order</button>
                    </div>
                  ))}
                </div>
              </>))}
          </>);
      }else{
        tabContent=(<>
          <div className="app__order-menu">
            {MENU[i].items?.map((item)=>(
              <div className="app__order-menu-item flex__center">
                <img src={item.image} alt={item.name}></img>
                <h1 className="p__montserrat">{item.name}</h1>
                <p className="p__montserrat">${item.price}</p>
                <button className="custom__button">Order</button>
              </div>
            ))}
          </div>
        </>);
      }
    }
  }

  return <>
    <Hero><h1 className="headtext__montserrat">ORDER ONLINE</h1></Hero>
    <section className="app__order container section__padding flex__center">
      <div className="app__order-left-section">
        <MenuTabs
          buttons={MENU.map((section) => (
            <MenuTabButton key={section.name} isSelected={selectedCategory === section.name} 
                      onSelect={() => handleSelect(section.name)}>
              {section.name}
            </MenuTabButton>
        ))}>
        {tabContent}
        </MenuTabs>
      </div>

      <div className="app__order-right-section flex__center">
        <div className="app__order-account flex__center">
          <button className="account-button" onClick={toggleDropdown}>Account &#9660;</button>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <button className="dropdown-item login-button">Log In</button>
                {/* Add more items here */}
              </div>
            )}
          <p className="p__greatvibes">Bánh Mì Ba-Ye</p>
        </div>
        <div className="app__order-summary">
          <h1 className="p__montserrat">Your order</h1>
          <img src={cart}></img>
          <p>Cart is empty. Add menu items.</p>
          <button className="custom__button">Go to checkout&gt;</button>
        </div>
      </div>
      
    </section>
  </>
}

export default OrderPage;