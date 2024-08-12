export default function TopContent() {
    return(
        <section id="top-content">
            <h1>
                John Mordecai 
                <span>Musician Summary</span>
            </h1>
            
            <div className="intro">
                <p>I'm a primarily self-taught musician since 1996. I first picked up the bass guitar before slowly teaching myself how to play keyboards. It went from there. I've played in a number of bands over the years, usually as a bass player or keyboardist. My most significant tenure was in Apse from 2007-2011, during which several albums were released and multiple tours across Western Europe took place.</p>

                <p><a href="mailto:john@johnmordecai.com" title="">Contact me.</a></p>

                <h2>Instruments</h2>
                <ul className="instruments">
                    <li>Bass Guitar</li>
                    <li>Guitar</li>
                    <li>Keyboards</li>
                    <li>Vocals</li>
                </ul>

                <h2>Selected Gear</h2>
                <ul>
                    <li>Fender Geddy Lee Jazz Bass</li>
                    <li>Fender Stratocaster</li>
                    <li>Ovation Celebrity Acoustic Electric Guitar</li>
                    <li>Apple Logic Pro X</li>
                    <li>Arturia KeyLab61 + Software Synths and Effects</li>
                    <li>Assorted effect pedals (Boss, Electro-Harmonix, etc.)</li>
                </ul>
            </div>
        </section>
    )
}