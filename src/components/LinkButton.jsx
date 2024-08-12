export default function LinkButton(props) {
    return(
        <a className="btn" href={props.url} title={props.title} target="_blank">Click Here</a>
    )
}