import { ReactNode } from "react";
import './MenuTabs.css'

type Props = {
  buttons: ReactNode;
  children: ReactNode;
}

const MenuTabs = ({children, buttons}: Props) => {
  return <>
    <menu className="flex__center app__menu-buttons-container">
        {buttons}
    </menu>
    {children}
  </>
}

export default MenuTabs;