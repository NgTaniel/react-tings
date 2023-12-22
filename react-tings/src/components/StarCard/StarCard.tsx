import { BsStarFill } from "react-icons/bs";
import "./StarCard.css"

interface StarContainerProps {
    numStars: number
}

const StarCard = ({numStars}: StarContainerProps) => {
  const displayStars = Array(numStars).fill(<BsStarFill color="#fff300" style={{marginRight: "3px", marginTop: "3px"}}/>);

  return (
    <div id="star-container">
      {displayStars}
    </div>
  )
}

export default StarCard
