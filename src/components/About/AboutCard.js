import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do! */}
            I am engrossed in the enchantment of Kathak dance as well as immersed in an excellent book. Unbelievably, "The Silent Patient" recently captivated my attention. 
            When I'm not pounding the dance floor, I can be found sulking with a book and eagerly flipping the pages as if it were my superpower.
            Each narrative that I absorb further solidifies my affection for cadence and stories.<br /> <br />
            As I combine the allure of a good book with the elegance of Kathak, I shall construct a portfolio that is as varied and vibrant as my personal interests.
            📚💃
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Amidst the intricacies of existence, leisure activities serve as subtle prompts that prioritising self-care is essential rather than treating it as a luxury."{" "}
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
