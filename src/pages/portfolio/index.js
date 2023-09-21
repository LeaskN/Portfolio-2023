import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) =>  images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('../../assets/images/portfolio', false, /\.(png|jpe?g|svg)$/));

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={images?.[data.img] ? images?.[data.img] : data.img } alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  {data.link1?<a target='new' href={data.link1}>View Project</a> : ''}
                  {data.link2?<a target='new' href={data.link2}>{data.link3?'GitHub: Front-End' : 'GitHub' }</a> : ''}
                  {data.link3?<a target='new' href={data.link3}>GitHub: Back-End</a> : ''}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
