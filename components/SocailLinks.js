import Section from "./Section";

export default function SocialLinks(props) {

    const style = {}

    const divStyle = {
        padding: "20px",
        margin: "20px",
    }

    return(
        <Section>
            <a style={divStyle} href="https://www.facebook.com/sublosermusic/" target="_blank">
                <img style={style} className="socialLink" src="/facebook.svg"/>
            </a>
            <a style={divStyle} href="https://www.instagram.com/sublosermusic/" target="_blank">
                <img style={style} className="socialLink" src="/instagram.svg"/>
            </a>
            <a style={divStyle} href="https://twitter.com/sublosermusic" target="_blank">
                <img style={style} className="socialLink" src="/twitter.svg"/>
            </a>
        </Section>
    )
}