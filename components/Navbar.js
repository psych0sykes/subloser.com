import Section from "./Section"
import Home from "../pages"

export default function Navbar(props){

    const itemStyle = {
        border: "3px solid white"
    }

    const pages = [
        {title: "home",url: "/"},
    ]

    return(
        <Section align="flex-start" justify="flex-start">
            <div>home</div>
            <div>page 2</div>
            <div>page 3</div>
        </Section>
    )
}