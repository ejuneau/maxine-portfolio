import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Maxine Sophia Wolff"
  }, [])
  return (
    <div className="contact">
      <div className="about" style={{color: "var(--debug-text-colour)"}}>
        <p>I didn't put anything here! Not sure if that's something you want to have publicly available.</p>
        <p>If you did there can just be a mailto link that will automatically draft an email once it's clicked (like on <a href="https://ejuneau.me/contact" target="_blank" rel="noreferrer">my website</a>!)</p>
        <p>Let's talk about it! -EJ</p>
      </div>
    </div>
  );
}

export default Contact;
