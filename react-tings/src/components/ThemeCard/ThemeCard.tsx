import { List } from "../../types"
import "./ThemeCard.css"
import StarCard from "../StarCard/StarCard"

interface ThemeProps {
    list: List
}

const ThemeCard = ({list}: ThemeProps) => {
    const themeList = list.themes.map(t => <p id="theme-card-themes">{t}</p>);

    return (
        <div id="theme-card-component">
            <h3 id="theme-card-name">{list.name}</h3>
            <hr/>
            <StarCard numStars={list.rating}/>
            {themeList}
        </div>
    )
}

export default ThemeCard;