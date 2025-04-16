import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Maxine Sophia Wolff"
  }, [])
  return (
    <div className="contact">
      <div className="about">
        <p>Click <a href="mailto:tortiwolff18@gmail.com?subject=Reaching out from your Portfolio site" rel="noreferrer" target="_blank">here</a> to contact me via email.</p>
      </div>
    </div>
  );
}

export default Contact;
