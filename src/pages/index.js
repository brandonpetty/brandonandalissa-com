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
        <h3>May 05, 2018 - 2:00 PM</h3>
        <hr />
        <p>
          <strong>Fendley Farmstead</strong>
          1287 Sardis Rd, Canton, GA 30114
        </p>
        <a href="">Please RSVP</a>
      </div>
    </section>
    <section className="about">
      <div className="card brandon">
        <div className="image">
          <img src="" alt="" />
        </div>
        <p>Lorem ipsum blah blah blah blah. Lorem ipsum blah blah blah blah. Lorem ipsum blah blah blah blah.</p>
      </div>
      <div className="card alissa">
      <div className="image">
        <img src="" alt="" />
      </div>
      <p>Lorem ipsum blah blah blah blah. Lorem ipsum blah blah blah blah. Lorem ipsum blah blah blah blah.</p>
    </div>
    </section>
    <section className="timeline">
      <h1>Our Story</h1>
      <div className="tile-wrapper">
        <div className="tile">2013</div>
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <div className="tile">2014</div>
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <div className="tile">2015</div>
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <div className="tile">2016</div>
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <div className="tile">2017</div>
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
        <img className="tile" src="http://via.placeholder.com/300x300" alt />
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
