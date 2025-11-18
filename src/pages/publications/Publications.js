import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { publicationsHeader, publications } from "../../portfolio.js";
import PublicationsImg from "./PublicationsImg";
import "./Publications.css";

class Publications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="publications-main">
        <Header theme={theme} />
        {publications.data.length > 0 ? (
          <div className="basic-publications">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-img-div">
                  <PublicationsImg theme={theme} />
                </div>
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="publications-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} key={pub.id} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Publications;
