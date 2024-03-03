import React from "react";
import video2 from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="footer">

    <div className="videoDiv">
      <video src={video2} loop autoPlay muted type="video/mp4"></video>
    </div>

    <div className="secContent container">

      <div className="contactDiv flex">
        <div className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
        </div>
        <div className="inputDiv flex">
          <input type="text" placeholder="Enter Email Address" />
          <button className="btn flex">
            SEND
            <FiSend className="icon" />
          </button>
        </div>
      </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          
          <div className="logoDiv">
            <a href="" className="logo flex">
              <MdOutlineTravelExplore className="icon" /> Travel.
            </a>
          </div>

          <div className="footerParagraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            molestias cumque consequuntur, voluptatem culpa ad quo enim
            officia quaerat labore iste magnam omnis at. Suscipit, aut culpa!
            Harum, iusto tenetur!
          </div>

          <div className="footerSocials flex">
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <AiFillInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
        </div>

        <div className="footerLinks grid">
          {/* Group One  */}
          <div className="linkGroup">
            <span className="groupTitle">OUR AGENCY</span>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Services
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Insurence
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Agency
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Tourism
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Payment
            </li>
          </div>

          {/* Group One  */}
          <div className="linkGroup">
            <span className="groupTitle">PARTNERS</span>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Bookings
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Rentcars
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              HostelWorld
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              TripAdvisor
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Payment
            </li>
          </div>

          {/* Group Two  */}
          <div className="linkGroup">
            <span className="groupTitle">PARTNERS</span>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Bookings
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Rentcars
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              HostelWorld
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              TripAdvisor
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Payment
            </li>
          </div>

          {/* Group Three  */}
          <div className="linkGroup">
            <span className="groupTitle">LAST MINUTE</span>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              London
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              California
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Indonesia
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Europe
            </li>

            <li className="footerList flex">
              <FiChevronRight className="icon" />
              Oceania
            </li>
          </div>
        </div>
        <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>COPYRIGHTS RESERVED - WEBTEC 2024 </small>
        </div>
      </div>
    </div>

  </section>
  )
}

export default Footer
