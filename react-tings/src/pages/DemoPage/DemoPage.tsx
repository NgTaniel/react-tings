import { useNavigate } from "react-router-dom"
import UseStateDemo from "../../components/UseStateDemo"
import HeaderCard from "../../components/HeaderCard"
import DemoComponent from "../../components/DemoComponent/DemoComponent";

export default function DemoPage() {
  const navigate = useNavigate();

  return (
    <div id="demo-page-container">
      <div id="left-grid">
        <HeaderCard/>
        <UseStateDemo/>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>

      <div id="right-grid">
        <DemoComponent/>
      </div>
    </div>
  )
}
