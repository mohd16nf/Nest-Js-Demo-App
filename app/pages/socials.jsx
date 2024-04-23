import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const socials = () => {
  return (
    <div className=" m-20" id='socials'>
        <FaFacebook className="icons mx-5" />
        <FaTwitter className="icons mx-5" />
        <FaInstagram className="icons mx-5" />
        <FaLinkedin className="icons mx-5" />
      </div>
  )
}

export default socials