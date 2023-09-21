import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { resumeData, meta } from "../../content_option";

function importAll(r) {
  let images = {};
  r.keys().map((item) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

export const Resume = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        {resumeData.map((data, i) => {
          return(
            <a href='https://github.com/LeaskN/Portfolio-2023/files/12686639/Nic.Leask.Software.Engineer.Resume.9.23.pdf' alt='download Nic Leask resume'>
              <img key={data.img} src={images?.[data.img]} alt="NicLeaskResume" width='100%' />  
            </a>
          )
        })}
      </Container>
    </HelmetProvider>
  );
};
