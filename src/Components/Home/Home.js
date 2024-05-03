import React from "react";
import "./home.css";
import pride from "../../Assets/Pridesection.png";
import ingrediant from "../../Assets/ingrediant.png";
import Header from "./header/Header";
import Card from "./cards/Card";
import cardOne from "../../Assets/cardOne.jpg";
import cardTwo from "../../Assets/cardTwo.jpg";
import cardThree from "../../Assets/cardThree.jpg";
import testimonialsOne from "../../Assets/testimonialsOne.jpg";
import testimonialsTwo from "../../Assets/testimonialsTwo.jpg";
import testimonialsThree from "../../Assets/testimonialsOne.jpg";
const Home = () => {
  return (
    <div>
      <Header />
      <section className="numbers text-center">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h2>5786+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h2>1440+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h2>7110+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src={pride} alt="Pride Phote" title="pride Image" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>
                <a href="/#">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="ingrediants">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 ingridiantImg">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button>
                <a href="/#">Learn More</a>
              </button>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src={ingrediant} alt="ingrediant" />
            </div>
          </div>
        </div>
      </section>
      <section className="cake text-center">
        <h2>
          When a man's stomach is full it makes no <br /> difference whether he
          is rich or poor.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio <br /> finibus bibendum in sit amet leo. Mauris feugiat
          erat tellus.
        </p>
        <button>
          <span>
            <i className="fa-solid fa-play"></i>
          </span>
          <span>Watch Our Story</span>
        </button>
      </section>
      <section className="information text-center">
        <h2>Explore Our Foods</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet <br /> leo. Mauris feugiat
          erat tellus. Far far away, behind the word mountains, far from the
          countries Vokalia and <br /> Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove.
        </p>
      </section>
      <div className="container cards">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img={cardOne}
              heading="Rainbow Vegetable Sandwich"
              paragraph="Time: 15 - 20 Minutes | Serves: 1"
              priceOne="$10.50"
              priceTwo="$11.70"
              button="Order Now"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img={cardTwo}
              heading="Vegetarian Burger"
              paragraph="Time: 30 - 45 Minutes | Serves: 1"
              priceOne="$9.20"
              priceTwo="$10.50"
              button="Order Now"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img={cardThree}
              heading="Raspberry Stuffed French Toast"
              paragraph="Time: 10 - 15 Minutes | Serves: 1"
              priceOne="$12.50"
              priceTwo="$13.20"
              button="Order Now"
            />
          </div>
        </div>
      </div>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={testimonialsOne} className="d-block w-100" alt="..." />
              <div className="carousel-caption info mt-3">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={testimonialsTwo} className="d-block w-100" alt="..." />
              <div className="carousel-caption info mt-3">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={testimonialsOne} className="d-block w-100" alt="..." />
              <div className="carousel-caption info mt-3">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="questions">
        <h2>Frequently Asked Questions</h2>
        <div className="container">
          <div className="row mt-5 text-start">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h5 className="questionsheading">
                Is Foodera Bread really baked fresh each day?
              </h5>
              <p className="mt-3">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h5 className="questionsheading">
                Is Foodera Bread really baked fresh each day?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h5 className="questionsheading">
                Is Foodera Bread really baked fresh each day?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
              <h5 className="questionsheading">
                Is Foodera Bread really baked fresh each day?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="baked">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h3>Baked fresh daily by bakers with passion</h3>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="form">
        <h4>
          Hurry up! Subscribe our newsletter <br /> and get 25% Off
        </h4>
        <p>Limited time offer for this month. No credit card required.</p>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-md-12">
              <input type="email" placeholder="Email Address Here" />
            </div>
            <div className="col-lg-6 col-md-12 col-md-12">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <section className="footer text-center">
        <ul className="links">
          <li>
            <a href="/#">Register</a>
          </li>
          <li>
            <a href="/#">Forum</a>
          </li>
          <li>
            <a href="/#">Affiliate</a>
          </li>
          <li>
            <a href="/#"> FAQ</a>
          </li>
        </ul>
        <ul className="social">
          <li>
            <a href="https://www.facebook.com/moalfj?mibextid=ZbWKwL">
              <i className="fa-brands fa-facebook facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/moamenhussein">
              <i className="fa-brands fa-github github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/moamen-hussein-414ab1254/">
              <i className="fa-brands fa-linkedin-in linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/moamenhussein1?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
              <i className="fa-brands fa-instagram insta"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/qr/O7BJLZVEUXVYK1">
              <i className="fa-brands fa-whatsapp whats"></i>
            </a>
          </li>
        </ul>
        <div className="made">Made With ❤️ By ENG / Moamen Hussein &copy; 2024</div>
      </section>
    </div>
  );
};

export default Home;
