import React, { useState } from "react";

export default function Me() {
  const [display, setDisplay] = useState(false);
  return (
    <div className="me">
      <p>
        Thanks for checking out my portfolio! While you're here, let me share a
        bit about myself.
      </p>
      <p>
        I'm a bit of an outdoors enthusiast, and my career oftentimes reminds of
        my experiences when I take my yearly hike in the Rockies: impulsively
        going in a more interesting direction, often getting lost, and having
        moments of self-doubt. Yet I never regret the view at the top, and I
        always relish the work it took to get there.
      </p>
      <p>
        Clearly, I have a tendency to stray. When there's a world of
        exploration, it's hard for me to stay in one place. I realized something
        important when I delved into software development. Like hiking and
        traveling, it satisfies my desire to explore.
      </p>
      <p>
        Following an adjustment in career path, I ventured into the realm of
        software development. While pursuing my current studies in
        Socio-cultural Anthropology, I completed General Assembly's{" "}
        <em>Software Engineering Immersive</em> bootcamp. I learned to use
        various technologies for both the front- and back-end, completed
        numerous projects, and spent over 480 hours of learning and absorbing
        new material. (PS: check out the{" "}
        <a href="#"> current projects I'm working on!</a>)
      </p>
      <p
        className={display ? "see-less" : "see-more  toggle-hide"}
        onClick={() => setDisplay(true)}
      >
        ...see more
      </p>
      <div className={!display ? "see-less" : "see-more"}>
        <p>
          The road to becoming a developer has so far been like the rest of my
          life: varied, widespread, and somewhat out of order. Here's a quick
          breakdown:
          <ul className="me-breakdown">
            <li>Earn a diploma in Exercise Science after highschool...</li>
            <li>Work 4 years in the financial industry...</li>
            <li>Spend 2 years on a visa in England to travel...</li>
            <li>Come back and enroll myself at the University of Toronto...</li>
            <li>Take up a part-time at a restaurant...</li>
          </ul>
        </p>
        <p>
          And in my final year of my Anthropology degree, I make a serious
          decision to become a programmer. That said, I've leveraged each
          experience to find passion in writing (as you may have noticed
          already), fitness, and travel. I've worked and mingled with people in
          various cultures and contexts.
        </p>
        <p>
          There's often a negative connotation to being a "jack of all trades,
          but master of none". But as the full saying goes, "a jack of all
          trades is a master of none, but oftentimes better than a master of
          one". Naturally, as a Junior developer, I aspire for improvement.
          Having worked in teams in various industries, one thing always stands
          out: the difference between good and bad communication.
        </p>
        <p>
          And as I leave you to explore the rest of my portfolio, I do hope
          you've taken an interest. I'd love to learn what projects you're
          working on. Looking forward to discuss how I can help make an impact
          for your company!
        </p>
        <p
          className={!display ? "see-less" : "see-more toggle-hide"}
          onClick={() => setDisplay(false)}
        >
          ...see less
        </p>
      </div>
      <p>- Ralph</p>
    </div>
  );
}
