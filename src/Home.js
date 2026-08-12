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
        <p>You can click the the tab above to view my credits. You can also click <a href="https://maxinesophiawolff.itch.io/" target="_blank" rel="noreferrer">here</a> to see my old itch.io account.</p>
      </div>
    </div>
  )
}

export default Home;
