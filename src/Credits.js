import { useState, useEffect } from "react";
const fiction = [

    {
    name: "Little Green Solider",
    link: "https://www.nocobo.co/store",
    medium: "online",
    host: "Edge City Magazine",
    date: "November 2025",
  }, 
  {
      name: "Where Did All the Fireflies Go?",
      link: "https://blackfoxlitmag.com/current-issue/",
      medium: "online",
      host: "Black Fox Lit",
      date: "March 2025",
  }, 
  {
    name: "This Movie Sits on a Leyline",
    link: "https://www.seizethepress.com/2024/09/18/this-movie-theater-sits-on-a-leyline-stp11/",
    medium: "online",
    host: "Seize the Press",
    date: "January 2025",
  }, 
  {
    name: "Kiss the Werewolf",
    link: "https://www.thepinkhydra.com/issues/0103202409/kissthewerewolf/",
    medium: "online",
    host: "Pink Hydra Magazine",
    date: "September 2024",
  }, 
  {
    name: "Cocoon",
    link: "https://www.divinationsmagazine.co.uk/issue-4-disco/cocoon",
    medium: "online",
    host: "Divinations Magazine",
    date: "August 2024",
  },
  {
    name: "Swimming Pool Girl",
    link: "https://issuu.com/pulplitmag/docs/pulp_issue_1-2",
    medium: "online",
    host: "PULP Lit Mag",
    date: "June 2024",
  },
  {
    name: "Disparate Points in Space and Time",
    link: "https://kaleidotrope.net/archives/summer-2023/disparate-points-in-space-and-time-by-maxine-sophia-wolff/",
    medium: "online",
    host: "Kaleidotrope",
    date: "July 2023",
  },
  {
    name: "You Forever",
    link: "https://www.seizethepress.com/2023/04/15/you-forever-by-maxine-sophia-wolff/",
    medium: "online",
    host: "Sieze the Press",
    date: "April 2023",
  },
  {
    name: "Come the Banshee",
    link: "https://www.planetscumm.space/shop/planet-scumm-issue-14/",
    medium: "in print",
    host: "Planet Scumm's 14th issue",
    date: "November 2022",
  },
  {
    name: "Gutter-Bait",
    link: "https://paradoxghostpress.com/product/bleed-error-issue-1-spring-2022/",
    medium: "in print",
    host: "Paradox Ghost Press's inagural Bleed Error anthology",
    date: "April 2022",
  },
  {
    name: "HOUSE",
    link: "https://www.fusionfragment.com/issue-10/",
    medium: "online",
    host: "Fusion Fragment",
    date: "March 2022",
  },
    
  ]
  
  const professionalCredits = [
    {  
      credit: "Sensitivity Consultant",
      name: "Jackbox Party Pack 12",
      link: "https://www.jackboxgames.com/games/packs/the-jackbox-party-pack-12",
      date: "October, 2026",
    },

    {  
      credit: "Ghost Writer",
      name: "REDACTED",
      link: "https://www.merriam-webster.com/dictionary/secret",
      date: "REDACTED",
    },
   
    {  
      credit: "Lead Writer",
      name: "Nomori",
      link: "https://store.steampowered.com/app/2932680/Nomori/",
      date: "September, 2026",
    },
     {  
      credit: "External Narrative Review",
      name: "Marvel's Wolverine",
      link: "https://www.playstation.com/en-us/games/marvels-wolverine/?srsltid=AYCX9vLLBzABfHXFP_dTO90k-FapWi-j8AunXezBbGPdA5j2t0tNQj5v",
      date: "September, 2026",
    },
    {  
      credit: "Supporting Writer",
      name: "Afterlove EP",
      link: "https://store.steampowered.com/app/1599780/Afterlove_EP/",
      date: "Febuary, 2025",
    },
    {  
      credit: "Narrative Design",
      name: "Breeze in the Clouds",
      link: "https://store.steampowered.com/app/1823210/Breeze_in_the_Clouds/",
      date: "TBD",
    },
    {  
      credit: "Writing and Narrative Design",    
      name: "The Crush House",
      link: "https://www.devolverdigital.com/games/the-crush-house",
      date: "August 2024",
    },
    {      
      credit: "Additional Writing",
      name: "Suicide Squad: Kill the  Justice League",
      link: "https://www.suicidesquadgame.com/en-ca/",
      date: "January 2024",
    },
    {      
      credit: "Narrative Consultation",
      name: "Alan Wake 2",
      link: "https://www.alanwake.com/",
      date: "October 2023",
    },
    {      
      credit: "Writing",
      name: "Battle Shapers",
      link: "https://store.steampowered.com/app/1421290/Battle_Shapers/",
      date: "October 2023",
    },
    {      
      credit: "Sensitivity Consultation",
      name: "Shadow Gambit: The Cursed Crew",
      link: "https://store.steampowered.com/app/1545560/Shadow_Gambit_The_Cursed_Crew/",
      date: "August 2023",
    },
    {      
      credit: "Writing",
      name: "Goodbye Volcano High",
      link: "https://store.steampowered.com/app/1310330/Goodbye_Volcano_High/",
      date: "August 2023",
    },
    {      
      credit: "Additional Writing",
      name: "Space Warlord Organ Trading Simulator",
      link: "https://store.steampowered.com/app/1507780/Space_Warlord_Organ_Trading_Simulator/",
      date: "December 2021",
    },
    {      
      credit: "Narrative Consulting",
      name: "The Blackwood Charter",
      link: "https://www.blackwoodcharter.org/",
      date: "Blackwood Media LLC's weekend-long escape room.",
    },
    {      
      credit: "Mentee Writer",
      name: "Recommendation  Dog",
      link: "https://play.date/games/recommendation-dog/",
      date: "on the Panic Playdate. August 2021",
    },
    
  ]




function Credits() {
  
  const  [tab, setTab] = useState("fiction")

  useEffect(() => {
    document.title = "Credits | Maxine Sophia Wolff"
  }, [])

  return (
    <div className="credits">
      <div className="tabs">
        <div 
        onClick={()=>setTab("fiction")} 
        style={{
          backgroundColor:tab === "fiction" ? "var(--credits-active-tab-colour)" : "var(--credits-inactive-tab-colour)"}}><p>Fiction</p></div>
        {/* <div onClick={()=>setTab("interactiveFiction")}style={{backgroundColor:tab === "interactiveFiction" ? "var(--credits-active-tab-colour)" : "var(--credits-inactive-tab-colour)"}}><p>Interactive Fiction</p></div>         */}
        <div onClick={()=>setTab("professionalCredits")} style={{backgroundColor:tab === "professionalCredits" ? "var(--credits-active-tab-colour)" : "var(--credits-inactive-tab-colour)"}}><p>Professional Credits</p></div>
      </div>
      <div className="credits-content-container">
        {
            tab === 'fiction' && fiction.map(work => {
              return (
                <div className="work" key={work.name}>
                  <p><a href={work.link} target="_blank" rel="noreferrer">"{work.name}"</a> - Published {work.medium} in {work.host}, {work.date}</p>
                </div>
              )})
          }


        {/* {
            tab === 'interactiveFiction' && interactiveFiction.map(work => {
              return (
                <div className="work" key={work.name}>
                  <p><a href={work.link} target="_blank" rel="noreferrer">"{work.name}"</a> - {work.desc} Self-published {work.medium} on {work.host}, {work.date}</p>
                </div>
              )})
          } */}

        {
            tab === 'professionalCredits' && professionalCredits.map(work => {
              return (
                <div className="work" key={work.name}>
                  <p>{work.credit} for <a href={work.link} target="_blank" rel="noreferrer">"{work.name}"</a>, {work.date}</p>
                </div>
              )})
          }
      </div>
    </div>
  );
}

export default Credits;