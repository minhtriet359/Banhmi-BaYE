type Props = {
  img: string;
  title: string;
  description: string;
}

const FeatureCard = ({img, title, description}: Props) => {
  return (
    <div className="app__feature-card flex__center">
      <img src={img} alt={title}/>
      <p className="p__montserrat app__feature-card-title">{title}</p>
      <p className="p__montserrat app__feature-card-description">{description}</p>
    </div>)
}

export default FeatureCard;