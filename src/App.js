import React, { useState, useEffect } from "react";
import "./App.scss";
import logo from "./Assets/aganithaLogo.svg";
import brain from "./Assets/brain.png";
import bigData from "./Assets/bigdatarep.png";
import ReactWordcloud from "react-wordcloud";
import "react-bootstrap";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <SearchInterventions />
      <MainPageSegue />
      <Highlights />
      <PageFindings />
      <WordCloudModule />
      <SubscribeCard />
    </div>
  );
};

const NavBar = () => {
  return (
    <div class="nav d-flex pl-3">
      <img src={logo} className="header_logo img-fluid" alt="logo" />
    </div>
  );
};

const Header = () => {
  return (
    <section className="header">
      <div className="container pl-0">
        <div className="row">
          <div className="col py-3 d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row row-cols-1">
                <div className="header_info info pt-4">
                  <div className="info_title h1">Aganitha COVID Hub</div>
                  <div className="info_description pb-3">
                    <div>
                      A highly automated hub for COVID Research and Development,
                      therapeutics and Vaccines.
                    </div>
                  </div>
                  <button className="header_info_button btn btn-primary">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <img
              src={bigData}
              className="header_image"
              alt="Responsive Image"
            /> */}

            <div style={{ width: "50%", height: "20rem" }}>
              {/* Filler for aligning elements */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SearchInterventions = () => {
  return (
    <div className="searchContainer">
      <section className="container lookup">
        <div className="row row-cols-1">
          <div className="col">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Interventions/Sponsors/Trial ID"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                className="input-group-text searchContainer_button"
                id="basic-addon2"
              >
                Search
              </span>
            </div>
            <div className="container lookup_description">
              <div className="row">
                <div className="col-sm lookup_text">
                  1800+ <br />
                  Interventions
                </div>
                <div className="col-sm lookup_text">
                  6000+ <br /> Trials
                </div>
                <div className="col-sm lookup_text">
                  200,000+ <br /> Articles
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const MainPageSegue = () => {
  return (
    <section className="mainpagesegue">
      <div className="container d-flex ">
        <div style={{ width: "60%" }}>
          <div className="h3">
            How are Machine Learning and AI are contributing to advancements in
            Medical Research?
          </div>
          <div style={{ width: "70%" }}>
            <div>
              In the Age of Artificial Inteligence, Research and Development of
              Modern treatments for modern illnesses. Learn about how Aganitha
              contributes to those advances
            </div>
          </div>
          <button class="btn btn-primary mt-2">Learn about Aganitha.ai</button>
        </div>
        {/* <img
          src={brain}
          alt="machine learning"
          className="img-fluid"
          ={{
            objectFit: "contain",
            width: "30rem",
          }}
        /> */}
      </div>
    </section>
  );
};

const Highlights = () => {
  const cardData = [
    {
      image:
        "https://www.statnews.com/wp-content/uploads/2018/10/STAT_Pfizer01-768x432.jpg",
      title: "Pfizer applies for EUA of vaccine",
      content:
        "Pfizer and BioNTech applied for an Emergency Use Authorization of their mRNA-based vaccine candidate, BNT162b2, against...",
    },
    {
      image:
        "https://static01.nyt.com/images/2020/12/02/science/02VIRUS-MODERNA-KIDS/02VIRUS-MODERNA-KIDS-jumbo.jpg?quality=90&auto=webp",
      title: "Pfizer vaccine met primary efficacy endpoint",
      content:
        "Pfizer and BioNTech announced Nov 18th, that their mRNA-based vaccine candidate, BNT162b2, against SARS-CoV-2 has met...",
    },
    {
      image:
        "https://www.roche.com/dam/jcr:242428b8-6ab5-4472-85f1-966dc59fe700/en/CrossMab-teaser-740.jpg",
      title: "LY-CoV555 study begins",
      content:
        "Lilly begins world's first study of a potential COVID-19 Antibody treatment in humans. Know more about [Lilly's antibody therapy](/interventions/ly%20cov555)",
    },
  ];

  return (
    <div className="highlights">
      <section className="container">
        <div className="row">
          <div className="highlights_heading">
            <div className="mb-3 highlights_heading_inner">
              <div className="h4">Top Current Highlights</div>
              <div>
                As the virus expands and hospitalizations reach record highs,
                treatment development is moving fast, with Pfizer and Moderna
                applying for emergency use authorization to FDA and UK for front
                line worker protection.
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center pt-3 highlights_cardContainer">
            {cardData.map((card) => (
              <div className="card m-1" style={{ width: "100%" }}>
                <img
                  src={card.image}
                  className="card-img-top highlights_card_img"
                  alt="..."
                />
                <div
                  className="card-body d-flex flex-column align-items-center"
                  style={{ height: "50%" }}
                >
                  <h5 className="card-title align-self-start">{card.title}</h5>
                  <p className="card-text align-self-start">{card.content}</p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PageFindings = () => {
  const findData = [
    {
      image: "https://img.icons8.com/ios/100/000000/insulin-pen.png",
      title: "Vaccines",
      content:
        "Learn about current vaccination efforts through types of vaccines, their phase progress and more",
    },
    {
      image: "https://img.icons8.com/ios/100/000000/virus-free.png",
      title: "Anti-Virals",
      content:
        "Explore different anti-viral efforts thorugh their trials such as Remdesivir.",
    },
    {
      image: "https://static.thenounproject.com/png/1681770-200.png",
      title: "Anti-Bodies",
      content:
        "Learn about anti- body therapy candidates and how they help fight covid",
    },
  ];

  return (
    <div className="pageFindings">
      <section className="container">
        <div className="row">
          <div>
            <div className="h4">What can you find here?</div>
            <div>
              Learn about the different approaches that are being put in action
              to help combat COVID-19
            </div>
          </div>
          {findData.map((card) => (
            <div
              className="col d-flex justify-content-center"
              style={{ paddingTop: "2rem" }}
            >
              <div className="card pageFindings_card">
                <div className="pageFindings_card_imageContainer">
                  <img
                    src={card.image}
                    className="card-img pageFindings_card_img"
                    alt="..."
                  />
                </div>
                <div className="card-body d-flex flex-column ">
                  <h5 className="card-title d-flex justify-content-center">
                    {card.title}
                  </h5>
                  <p className="card-text">{card.content}</p>
                  <div className="flex-fill">
                    {/* Filler for aligning elements */}
                  </div>
                  <a
                    href="#"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const WordCloudModule = () => {
  const words = [
    {
      text: "told",
      value: 64,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
  ];

  return (
    <section className="container py-5">
      <div className="h4">Conditions being Investigated</div>
      <div class="h6 pb-3">Some conditions relating to COVID infections</div>
      <div className="wordCloudContainer">
        <ReactWordcloud words={words} />
      </div>
    </section>
  );
};

const SubscribeCard = () => {
  return (
    <div class="subscribe">
      <section className="d-flex justify-content-center p-3">
        <div className="card subscribe_card">
          <div className="card-body">
            <div className="form-group d-flex flex-column align-items-center">
              <label for="exampleInputEmail1" className="p-2">
                Subscribe to Aganitha for updates!
              </label>
              <input
                placeholder="Email Address"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <button class="btn btn-primary m-2">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
