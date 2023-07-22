import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, NavDropdown, Navbar } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  const [order, setOrder] = useState([...skills]);
  const [sortTitle, setSortTitle] = useState('Default')

  function changeOrder(e) {
    setSortTitle(e.target.innerText);
    const currentOrder = e.target.attributes[0].nodeValue;
    if (currentOrder === 'reset') return setOrder([...skills])
    const sorted = e.target.attributes[0].nodeValue === 'importance' ?
      [...order].sort((a, b) => Number(a[currentOrder]) > Number(b[currentOrder]) ? 1 : -1) :
      [...order].sort((a, b) => Number(a[currentOrder]) > Number(b[currentOrder]) ? -1 : 1);
    setOrder(sorted);
  };
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme1}</p>
              <p>{dataabout.aboutme2}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work History:</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <Navbar className="skillsNav">
              <h3 className="color_sec py-4">Skills:</h3>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={`Sort by: ${sortTitle}`}
                menuVariant="dark"
              >
                <NavDropdown.Item value='experience' onClick={changeOrder}>Experience</NavDropdown.Item>
                <NavDropdown.Item value='importance' onClick={changeOrder}>Most Commonly Used</NavDropdown.Item>
                <NavDropdown.Item value='value' onClick={changeOrder}>Skill</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item value='reset' onClick={changeOrder}>Default</NavDropdown.Item>
              </NavDropdown>
            </Navbar>
          </Col>
          <Col lg="7">
            {order.map((data) => {
              return (
                <div key={data.id}>
                  <br/>
                  <h3 className="progress-title">{data.name}, <span className='yrsExp'>{data.experience}+ Years</span></h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Services:</h3>
          </Col>
          <Col lg="7">
            {services.map((service, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{service.title}</h5>
                  <ul className="service_desc">
                    {service.descriptions.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
