import fakturInvoice from "../images/faktur invoice.svg";
import portafo from "../images/portafo.avif";
import subtleFolio from "../images/subtle folio.avif";
import Footer from "./footer";

const Products = () => {
  return (
    <div className="products-container">
      <p className="sectionTitle">
        <div className="grey-dot"></div>Products
      </p>
      <p className="aboutMe-title">Explore My Products</p>
      <p className="aboutMe-subtitle">
        Some of the digital products that I worked on as side projects, explore
        and try it now
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

export default Products;
