import React, { useEffect } from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img1 from "../../Assets/img1.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import img4 from "../../Assets/img4.jpg"
import img5 from "../../Assets/img5.jpg"
import img6 from "../../Assets/img6.jpg"
import img7 from "../../Assets/img7.jpg"
import img8 from "../../Assets/img8.jpg"
import img9 from "../../Assets/img9.jpg"
import img10 from "../../Assets/img10.jpg"

import Aos from 'aos'
import 'aos/dist/aos.css';

const Main = () => {


  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const Data = [
    {
      id: 1,
      imgSrc: img1,
      destTitle: "Bore Bore",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fees: "$700",
      destination: "The epitome of romance, Bore Bore is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities."
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: "Mystic Mountains",
      location: "Switzerland",
      grade: "SCENIC BEAUTY",
      fees: "$800",
      destination: "Surrounded by breathtaking landscapes, Mystic Mountains offers a serene escape with its picturesque views and charming atmosphere."
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: "Azure Beaches",
      location: "Maldives",
      grade: "TROPICAL PARADISE",
      fees: "$900",
      destination: "Experience the beauty of crystal-clear waters and white sandy beaches at Azure Beaches, a tropical paradise perfect for relaxation and water adventures."
    },
    {
      id:4,
      imgSrc: img4,
      destTitle: "Enchanting Elysium",
      location: "Greece",
      grade: "MYTHICAL ESCAPE",
      fees: "$750",
      destination: "Immerse yourself in the ancient charm of Enchanting Elysium, where history, mythology, and breathtaking landscapes come together for an unforgettable experience."
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: "Serenity Sands",
      location: "Thailand",
      grade: "TROPICAL TRANQUILITY",
      fees: "$600",
      destination: "Escape to the tranquility of Serenity Sands, where golden beaches, lush greenery, and vibrant culture create a perfect blend for a peaceful getaway."
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: "Northern Lights Haven",
      location: "Norway",
      grade: "NATURAL WONDERS",
      fees: "$950",
      destination: "Witness the magical dance of the Northern Lights at Northern Lights Haven, a destination that combines natural wonders with cozy atmospheres and thrilling experiences."
    },
    {
      id: 7,
      imgSrc: img7,
      destTitle: "Cultural Marvel",
      location: "Japan",
      grade: "CULTURAL ENRICHMENT",
      fees: "$820",
      destination: "Immerse yourself in the rich cultural tapestry of Japan at Cultural Marvel, where traditional beauty meets modern marvels in a harmonious blend."
    },
    {
      id: 8,
      imgSrc: img8,
      destTitle: "Majestic Safari",
      location: "Kenya",
      grade: "WILDLIFE ADVENTURE",
      fees: "$1200",
      destination: "Embark on a majestic safari adventure at Majestic Safari, where the untamed beauty of African wildlife unfolds against the backdrop of breathtaking landscapes."
    },
    {
      id: 9,
      imgSrc: img9,
      destTitle: "Rustic Retreat",
      location: "Italy",
      grade: "COUNTRYSIDE CHARM",
      fees: "$680",
      destination: "Experience the charm of the Italian countryside at Rustic Retreat, where rolling hills, vineyards, and historic villages create a perfect backdrop for relaxation."
    },
    {
      id: 10,
      imgSrc: img10,
      destTitle: "Island Oasis",
      location: "Fiji",
      grade: "TROPICAL ESCAPE",
      fees: "$850",
      destination: "Indulge in a tropical paradise at Island Oasis, where pristine beaches, turquoise waters, and vibrant coral reefs offer an idyllic escape from the everyday."
    }
  ]

  return (
    <section className='main container section'>
     
      <div className="secTitle">
        <h3 className="title" data-aos='fade-right'>
          Most visited distinations
        </h3>
      </div>

      <div className="secContent grid">
        { Data.map(({id,imgSrc,destTitle,location,grade,fees,destination})=>{ return(
          <div key={id} data-aos='fade-up' className='singleDestination'>
            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>

            <div className="cardInfo">

              <h4 className="destTitle">{destTitle}</h4>

              <span className="continent flex">
                <HiOutlineLocationMarker className='icon'/>
                <span className="name">
                  {location}
                </span>
              </span>

              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>

              <div className="desc">
                <p>{destination}</p>
              </div>

              <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className='icon'/>
              </button>

            </div>
          </div>
        )})}
      </div>

    </section>
  )
}

export default Main