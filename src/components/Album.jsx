export default function Album(props) {
    return(
        <>
            <div className="album">
                <a className="album-link" href={props.albumLink} title="Listen" target="_blank">
                    <img src={props.albumCover} alt="Album cover" />
                    <p className="album-title">
                        <span>{props.title}</span> {props.sideNote && <span className="album-note">[{props.sideNote}]</span>}
                    </p>
                    <span className="label">{props.info}</span>
                </a>
            </div>
        </>
    )
}