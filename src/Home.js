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
        <p>I used to make little games on my <a href="https://maxinesophiawolff.itch.io/" target="_blank" rel="noreferrer">itch.io account.</a></p>
      </div>
    </div>
  )
}

export default Home;
