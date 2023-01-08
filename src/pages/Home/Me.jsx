import React from 'react'
import ResumePage from '../ResumePage/ResumePage'
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";

export default function Me() {
  return (
    <div>
      <p>
        I am meticulous when it comes to the overall front-end design and user
        experience - of course, within given time constraints. Having completed
        my full-stack software engineering program with General Assembly, I gave
        myself 5-days to create this portfolio.
      </p>
      <p>
        Whenever I put down one project, I'm immediately eager to get my feet
        wet in another. I'd love to know what you'll be building next! Please
        get in touch and let's talk! Anyways, feel free to have a look around.
        Check out the repo for this project. And thanks for visiting! Look
        forward to hearing from you.
      </p>
      <p>- Ralph</p>
      <Link to="/cv" target="_blank">
            <CgFileDocument title="Ralph Tungol Resume 2022" className="socials-icons resume" />
          </Link>
    </div>
  )
}
