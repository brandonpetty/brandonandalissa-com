import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="home">
    <section className="intro">
      <h1>The Future<br/>Mr & Mrs Petty</h1>
      <h2>May 05, 2018</h2>
    </section>
    <section className="rsvp-shortcut">
    <div className="overlay--white"></div>
      <div className="card">
        <h1>Our Wedding</h1>
        <h3>May 05, 2018 - 5:00 PM</h3>
        <hr />
        <p>
          <strong>Fendley Farmstead</strong>
          1287 Sardis Rd, Canton, GA 30114
        </p>
        <a href="">Please RSVP</a>
        <p className="dry">*We request that guests refrain from bringing alcoholic beverages as this will be a dry wedding. Thank you for your understanding.</p>
      </div>
    </section>
    <section className="about">
      <div className="card brandon">
        <div className="image">
          <img src="./assets/profile-brandon.jpg" alt="Brandon" />
        </div>
        <strong>Brandon Petty</strong>
        <p>The only son of Cheryl (Petty) and stepfather Jim Moats. Brandon grew up in a small town just outside of Charleston, West Virginia. In 2004 he joined The United States Air Force where he served his country for 5 years. After leaving the military Brandon moved Atlanta with his dog Charlie where he currently works as a software engineer.</p>
      </div>
      <div className="card alissa">
      <div className="image">
        <img src="./assets/profile-alissa.jpg" alt="Alissa" />
      </div>
      <strong>Alissa Taylor</strong>
      <p>Oldest daughter to Lonnie and Teresa Taylor. Alissa is grew up in Albertville, Alabama before attending Auburn University where she received a degree in business with a minor in engineering. After college she moved to Altanta with her dog Mason where she currently works as a software engineer.</p>
    </div>
    </section>
    <section className="timeline">
      <h1>Our Story</h1>
      <div className="tile-wrapper">
        <div className="tile">2013</div>
        <div className="tile event"><strong>Brandon & Alissa</strong><q>Said Hello</q><time>December 15, 2013</time></div>
        <div className="tile event"><strong>Brandon & Alissa</strong><q>First Date</q><time>December 26, 2013</time></div>
        <img className="tile" src="./assets/001.jpg" alt="Brandon & Alissa" />
        <div className="tile event"><strong>Brandon & Alissa</strong><q>Started Dating</q><time>December 29, 2013</time></div>
        <div className="tile">2014</div>
        <img className="tile" src="./assets/002.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/003.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/004.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/005.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/006.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/007.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/008.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/009.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/010.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/033.jpg" alt="Brandon & Alissa" />
        <div className="tile">2015</div>
        <img className="tile" src="./assets/012.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/011.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/013.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/035.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/034.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/014.jpg" alt="Brandon & Alissa" />
        <div className="tile">2016</div>
        <img className="tile" src="./assets/015.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/016.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/017.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/018.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/019.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/020.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/021.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/022.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/023.jpg" alt="Brandon & Alissa" />
        <div className="tile event"><strong>Brandon & Alissa</strong><q>Got Engaged</q><time>December 21, 2016</time></div>
        <img className="tile" src="./assets/032.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/024.jpg" alt="Brandon & Alissa" />
        <div className="tile">2017</div>
        <img className="tile" src="./assets/025.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/026.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/027.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/028.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/029.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/030.jpg" alt="Brandon & Alissa" />
        <img className="tile" src="./assets/031.jpg" alt="Brandon & Alissa" />
        <div className="tile event"><strong>Brandon & Alissa</strong><q>Get Married</q><time>May 5, 2018</time></div>
      </div>
    </section>
    <section className="venue">

    </section>
    <section className="hotels">
    
    </section>
    <section className="rsvp">
      <form>
        <h1>Are you attending? RSVP Here!</h1>
        <h6>Please RSVP no later than January 1, 2018. If you need to make changes please contact us.</h6>
        <div className="form-elements">
          <input id="name" type="text" />
          <input id="guests" type="text" />
          <input id="attend" type="text" />
          <input id="name-plus-one" type="text" />
          <input id="name-plus-two" type="text" />
          <input id="address" type="text" />
          <input id="food" type="text" />
          <input id="hotel" type="text" />
          <input id="song" type="text" />
          <input id="hotel" type="submit" />
        </div>
      </form>
    </section>
    <footer>
      <a href="">Contact Us</a>
      <div className="center">Brandon & Alissa</div>
      <a href="">Leave Your Wishes</a>
    </footer>
  </div>
)

export default IndexPage
