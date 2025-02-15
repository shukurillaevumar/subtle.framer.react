import morva from "../images/morva.svg";
import simply from "../images/simply.svg";
import rectangle from "../images/rectangle.svg";
import glassador from "../images/glassador.svg";
import sevenLtd from "../images/sevenLtd.svg";
import fakturInvoice from "../images/faktur invoice.svg";
import portafo from "../images/portafo.avif";
import subtleFolio from "../images/subtle folio.avif";
import Footer from "./footer";

const projects = () => {
  return (
    <div className="projects-container">
      <p className="sectionTitle">
        <div className="grey-dot"></div>Projects
      </p>
      <p className="aboutMe-title">My Works</p>
      <p className="aboutMe-subtitle">
        Discover my portfolio, where purposeful interfaces meet captivating
        design. My work strives to enhance experiences and inspire.
      </p>
      <div className="projects">
        <div className="projects-body">
          <div className="projects-box">
            <div className="projects-box-child">
              <div className="img-box">
                <img src={morva} alt="icons" />
              </div>

              <div className="projects-box-info">
                <p className="projects-box-info-p-big">Morva Labs</p>
                <p className="projects-box-info-p-small">
                  Visual Design, Branding
                </p>
              </div>
            </div>
            <i className="fi fi-rr-angle-small-right"></i>
          </div>

          <div className="projects-box">
            <div className="projects-box-child">
              <div className="img-box">
                <img src={rectangle} alt="icons" />
              </div>

              <div className="projects-box-info">
                <p className="projects-box-info-p-big">Rectangle</p>
                <p className="projects-box-info-p-small">
                  Product Design, Icon design
                </p>
              </div>
            </div>
            <i className="fi fi-rr-angle-small-right"></i>
          </div>

          <div className="projects-box">
            <div className="projects-box-child">
              <div className="img-box">
                <img src={simply} alt="icons" />
              </div>

              <div className="projects-box-info">
                <p className="projects-box-info-p-big">Simply</p>
                <p className="projects-box-info-p-small">
                  Landing Page, Illiustration design
                </p>
              </div>
            </div>
            <i className="fi fi-rr-angle-small-right"></i>
          </div>

          <div className="projects-box">
            <div className="projects-box-child">
              <div className="img-box">
                <img src={glassador} alt="icons" />
              </div>

              <div className="projects-box-info">
                <p className="projects-box-info-p-big">Glassador</p>
                <p className="projects-box-info-p-small">
                  Icon design, Illustration design
                </p>
              </div>
            </div>
            <i className="fi fi-rr-angle-small-right"></i>
          </div>
          <div className="projects-box">
            <div className="projects-box-child">
              <div className="img-box">
                <img src={sevenLtd} alt="icons" />
              </div>

              <div className="projects-box-info">
                <p className="projects-box-info-p-big">Seven LTD.</p>
                <p className="projects-box-info-p-small">
                  Branding, Landing Page
                </p>
              </div>
            </div>
            <i className="fi fi-rr-angle-small-right"></i>
          </div>
        </div>
      </div>

      <p className="aboutMe-title">Explore My Products</p>
      <p className="aboutMe-subtitle">
        Some of the digital products that I worked on as side projects, explore
        them now
      </p>

      <div className="products">
        <div className="projects-head">
          <p>
            <div className="grey-dot"></div>Products
          </p>
        </div>

        <div className="producst-container">
          <div className="products-box">
            <div className="child-prod-box">
              <img src={portafo} className="pr-imgs" alt="img" />
              <p className="products-box-p-big">Portafo</p>
            </div>

            <div className="bot-child-prod-box">
              <div className="products-box-p-small">FRAMER TEMPLATE</div>
              <i className="fi fi-rr-link-alt"></i>
            </div>
          </div>

          <div className="products-box">
            <div className="child-prod-box">
              <img src={fakturInvoice} className="pr-imgs" alt="img" />
              <p className="products-box-p-big">Faktur Invoice</p>
            </div>

            <div className="bot-child-prod-box">
              <div className="products-box-p-small">FRAMER TEMPLATE</div>
              <i className="fi fi-rr-link-alt"></i>
            </div>
          </div>

          <div className="products-box">
            <div className="child-prod-box">
              <img src={portafo} className="pr-imgs" alt="img" />
              <p className="products-box-p-big">Goven</p>
            </div>

            <div className="bot-child-prod-box">
              <div className="products-box-p-small">FRAMER TEMPLATE</div>
              <i className="fi fi-rr-link-alt"></i>
            </div>
          </div>

          <div className="products-box">
            <div className="child-prod-box">
              <img src={subtleFolio} className="pr-imgs" alt="img" />
              <p className="products-box-p-big">Subtle Folio</p>
            </div>

            <div className="bot-child-prod-box">
              <div className="products-box-p-small">FRAMER TEMPLATE</div>
              <i className="fi fi-rr-link-alt"></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default projects;
