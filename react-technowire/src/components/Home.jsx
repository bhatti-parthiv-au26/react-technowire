import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Technowire</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who is the developer ?</h1>
          <p>
          Writing a thousand lines of code and turning that into a website is one of the most creative and complicated things for web developers. If you get excited seeing a lot of beautiful websites and thinking to try your hands on them then we need to open your eyes by telling you some important things that you should know as a web developer. 

Creating a website that gets a lot of users’ attention is not just about learning various programming languages, you also need to learn some other concepts like DevTools, data formats, testing, APIs, authentication, and a lot of stuff like that once you will dig yourself into this field. We are going to cover some important stuff here that you should learn as a web developer.Writing a thousand lines of code and turning that into a website is one of the most creative and complicated things for web developers. If you get excited seeing a lot of beautiful websites and thinking to try your hands on them then we need to open your eyes by telling you some important things that you should know as a web developer. 

Creating a website that gets a lot of users’ attention is not just about learning various programming languages, you also need to learn some other concepts like DevTools, data formats, testing, APIs, authentication, and a lot of stuff like that once you will dig yourself into this field. We are going to cover some important stuff here that you should learn as a web developer. Writing a thousand lines of code and turning that into a website is one of the most creative and complicated things for web developers. If you get excited seeing a lot of beautiful websites and thinking to try your hands on them then we need to open your eyes by telling you some important things that you should know as a web developer. 

Creating a website that gets a lot of users’ attention is not just about learning various programming languages, you also need to learn some other concepts like DevTools, data formats, testing, APIs, authentication, and a lot of stuff like that once you will dig yourself into this field. We are going to cover some important stuff here that you should learn as a web developer.  
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
