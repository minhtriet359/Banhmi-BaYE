type Props={
  children: React.ReactNode;
  isSelected: boolean;
  onSelect: ()=> void;
};

export default function TabButton({children, isSelected, onSelect}:Props){
  return (<li>
      <button className={`p__montserrat ${isSelected?"active":""}`} onClick={onSelect}>{children}</button>
    </li>);
}