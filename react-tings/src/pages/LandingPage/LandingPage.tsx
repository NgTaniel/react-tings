import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./LandingPage.css"

export default function LandingPage() {
  const navigate = useNavigate();
  const [description, setDescription] = useState<string>("sussy");

  const handleMouseOut = () => {
    setDescription("sussy");
  }

  const handleMouseOver = (newString: string) => {
    setDescription(newString);
  }

  return (
    <div>
      <h1>Welcome I guess?</h1>
      <div id="page-cards">
        <button 
          onClick={() => navigate('/demo')}
          onMouseOver={() => handleMouseOver("Demonstration Time :))")}
          onMouseOut={() => handleMouseOut()}>
          Demonstration
        </button>
      </div>
      <p id="text-desc">{description}</p>
    </div>
  )
}
