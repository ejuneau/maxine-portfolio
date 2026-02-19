import './Home.css';
import { useEffect } from 'react';
import "./assets/fonts/Karrik-Italic.ttf";
import "./assets/fonts/Karrik-Regular.ttf";
function Home() {

  useEffect(() => {
    document.title = "Maxine Sophia Wolff"
  }, [])

  return (
    <div className="home">
      <div className="about">
        <p>Welcome to my website! My name is Maxine Sophia Wolff. I am a 27-year-old writer and video game developer.</p>
        <p>You can click <a href="https://maxinesophiawolff.itch.io/" target="_blank" rel="noreferrer">here</a> to view my itch.io account.</p>
        <p>You can click <a href="https://docs.google.com/document/d/1Rax7KBRDtqJI8R-l_vRbxn9KIlb1ugc9/edit?usp=sharing&ouid=109269417576404919058&rtpof=true&sd=true" target="_blank" rel="noreferrer">here</a> to view my public portfolio of work.</p>
      </div>
    </div>
  )
}

export default Home;
