export default function ListenButton(props){

    const hStyle = {
        color: props.color,
        fontSize: "30px",
    }

    return(
        <a className="listenButton" href={props.link}>
                    <div style={hStyle}>{props.children}</div>
        </a>
    )
}