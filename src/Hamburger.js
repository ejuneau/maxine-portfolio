export default function Hamburger(props) {
  return(
    <>
      <div className="hamburger">
        <div className="burger burger1"/>
        <div className="burger burger2"/>
        <div className="burger burger3"/>
      </div>

      <style jsx>{`
        .hamburger{ 
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: space-around;
          flex-flow: column nowrap;
          z-index: 10;
          display: none;
          }
        
        .burger{
          width: 2rem;
          height: 0.25rem;
          border-radius: 10px;
          background-color: var(--header-link-colour);
          transform-origin: 1px;
          transition: all 0.3s linear;
          }
        
        .burger1{
          transform: ${ props.hamburgerOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
        }

        .burger2{
          transform: ${ props.hamburgerOpen ? 'translateX(20%)' : 'translateX(0)'};
          opacity: ${ props.hamburgerOpen ? 0 : 1};
        }

        .burger3{
          transform: ${ props.hamburgerOpen ? 'rotate(-45deg)': 'rotate(0deg)'}; 
        }

          @media (max-width: 767px){

            .contact, .credits, .home, .frosted-glass {
            width: 90%;
            font-size: 1.4em;
            }

            .hamburger{
              display: flex;
              z-index: 10;  
            }
            
            nav {
            
              display: ${props.hamburgerOpen?'flex':'none'};
              -webkit-backgrop-filter: blur(${props.hamburgerOpen?'10px':'0px'});
              backdrop-filter: blur(${props.hamburgerOpen?'10px':'0px'});
              background-color: ${props.hamburgerOpen?'rgb(228 228 228 / 15%)':'none'};              
              height: 75vh;
              width: 100vw;
              margin-top:15vh;
              top: 0;
              position: absolute;
              z-index: 100;
              flex-direction: ${props.hamburgerOpen? 'column':'row'};
              transition: backdrop-filter 0.1s ease-in-out, background-color 0.2s ease-in-out;
              justify-content: center;
              align-items: center;

              a {
              display: ${props.hamburgerOpen? 'inline':'none'};
              padding: 2rem;
              margin: 2em 0.5em !important;
              -webkit-backgrop-filter: blur(${props.hamburgerOpen?'10px':'0px'});
              backdrop-filter: blur(${props.hamburgerOpen?'10px':'0px'});
              background-color: ${props.hamburgerOpen?'rgb(228 228 228 / 15%)':'none'};
              width: 50%;              
              border-radius: 5px;
              box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);

              }
              a:nth-child(1) {
              margin-left: 0.5em !important;
              }
              a:last-child {
              margin-right: 0.5em !important;
              }
            }
          }
      `}</style>
    </>
  )
}