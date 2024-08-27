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
        <p>Welcome to my website! My name is Maxine Sophia Wolff. I am a 25-year-old transgender writer who writes both fiction as well as interactive fiction. I work as a writer and narrative designer for the narrative development company <a href="https://sweetbabyinc.com/" target="_blank" rel="noreferrer">Sweet Baby Inc</a>.</p>
        <p>Although my personal work tends towards speculative fiction, I enjoy and am capable writing in a variety of genres, formats, and stylistic modes.</p>
        <p>You can click <a href="https://maxinesophiawolff.itch.io/" target="_blank" rel="noreferrer">here</a> to view my itch.io account.</p>
      </div>
    </div>
  );
}

export default Home;
