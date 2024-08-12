import { useState } from 'react'
import bandData from './bandData.json'
import TopContent from './components/TopContent.jsx'
import ContentBox from './components/ContentBox.jsx'
import Album from './components/Album.jsx'
import BottomContent from './components/BottomContent.jsx'

export default function App() {

  const bandBoxes = bandData.map(bandBox => {
    return <ContentBox 
      key={bandBox.id}  
      id={bandBox.id}
      bandName={bandBox.bandName}
      timespan={bandBox.timespan}
      subItem={bandBox.instrument}
      content={bandBox.content}
      url={bandBox.url}
      factList={bandBox.factList}
      albums={bandBox.albums}
    />
  })

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="container">

        <TopContent />

        <section className="content">
          <h2>Band History</h2>
          {bandBoxes}
        </section>

        <BottomContent />
        
      </div>
    </>
  )
}