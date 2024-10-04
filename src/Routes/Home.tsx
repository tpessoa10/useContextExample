import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

const Home = () => {
    const {theme, toggleTheme}:any = useContext(ThemeContext)
    console.log(theme)
    return (
        <div>
            <h1>Home</h1>
            <button onClick={toggleTheme}>Mudar Tema</button>
            <p>O tema é {theme}</p>
        </div>
    )
}

export default Home