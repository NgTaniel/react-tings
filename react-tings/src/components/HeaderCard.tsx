import img from "../assets/violet.gif"
import "../pages/DemoPage/DemoPage.css"

export default function HeaderCard() {
  return (
    <div>
      <div id='header-card'>
        <h1>Beautiful animes</h1>
        <p>Not crying? That's surprising</p>
        <img src={img} alt="sadge :("/>
      </div>
    </div>
  )
}
