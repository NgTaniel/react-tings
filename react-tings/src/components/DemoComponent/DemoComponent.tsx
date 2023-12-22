import "./DemoComponent.css"
import { List } from "../../types"
import ThemeCard from "../ThemeCard/ThemeCard"
import { series } from "../DemoData"
import { useState } from "react"

const DemoComponent = () => {
  const [showList, setShowList] = useState<List[]>(series);
  
  const seriesList = showList.map((s) => {
    return <div><ThemeCard list={s}/></div>
  })
  
  return (
    <div id="demo-component-container">{seriesList}</div>
  )
}

export default DemoComponent