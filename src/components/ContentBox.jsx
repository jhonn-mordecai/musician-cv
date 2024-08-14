import LinkButton from './LinkButton.jsx'
import Album from './Album.jsx'
import bandData from '../bandData.json'

let baseURL = window.location.href;

export default function ContentBox(props) {

    return(
        <>
            <article id={'band_' + props.id} className="content-box">
                <div className="content-head">
                    <div className="_heading-inner">
                        <h2>{props.bandName}</h2> <span className="years-active">{props.timespan}</span>
                    </div>
                    <span className="role">{props.subItem}</span>
                </div>
                <div className="content-body">
                    <p>{props.content}</p>
                    <ul className="fast-facts">
                        {props.factList.map(fact => (<li key={fact}>{fact}</li>))}
                    </ul>

                    <section className="featured-recordings">
                        <h3>Featured Recordings</h3>

                        {props.albums.length > 0 ?

                            <div className="albums">
                                {
                                    props.albums.map(album => {
                                        return <Album 
                                            key={album.title}
                                            title={album.title}
                                            info={album.info}
                                            albumCover={baseURL + album.albumCover}
                                            sideNote={album.sideNote}
                                            albumLink={album.albumLink}
                                        />
                                        
                                    })
                                }
                            </div>

                            : <p>Not featured on any recordings; live performance only.</p>
                        }
                    </section>

                    {props.links.length > 0 ?
                        <section class="spot-links">
                            {
                                props.links.map(link => {
                                    return <LinkButton 
                                        key={link.platform}
                                        title={link.platform}
                                        buttonText={link.platform}
                                        url={link.url} 
                                    />
                                })
                            }
                        </section>
                        : ''
                    }

                </div>
            </article>
        </>
    )
}