export default function ListenButton(props){

    const hStyle = {
        color: props.color,
    }

    return(
        <a className="listenButton" href="https://open.spotify.com/artist/2eGR1MENSdFUpHZ4x5wIri?autoplay=true&v=A">
                    <div style={hStyle}>{props.children}</div>
        </a>
    )
}