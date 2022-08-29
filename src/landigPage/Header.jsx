import React from "react";
import logo from "./zyflogonew.png";
import image from "./pic1.png";
import pic from "./Untitled.png";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import telegramwhite from "../asset/telegramwhite.png";
import discordwhite1 from "../asset/discordwhite1.png";
import twitterwhite from "../asset/twitterwhite.png";

import "./LandingPage.css";
import { Grid } from "@material-ui/core";
function Header(props) {
  const openLitePaper = () => {
    const win = window.open("https://zyf.network/whitepaper", "_blank");
    win.focus();
  };
  const openBlog = () => {
    const blg = window.open("https://medium.com/@zyfprotocol", "_blank");
    blg.focus();
  };
  const openMedia = (type) => {
    switch (type) {
      case "fb":
        const fb = window.open("https://discord.gg/CyjsgfmETR", "_blank");
        fb.focus();
        break;
      case "telegram":
        const telgram = window.open("https://t.me/zyfnetworkdefi", "_blank");
        telgram.focus();
        break;
      case "twitter":
        const twitter = window.open("https://twitter.com/zyfdefi", "_blank");
        twitter.focus();
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Grid container className="main_div" justify="center">
        <Grid
          container
          justify="center"
          style={{
            backgroundColor: "#498bf5",
            paddingTop: "30px",
          }}
        >
          <Grid item xs={9}>
            <Grid container className="navbar">
              <Grid
                sm={6}
                md={6}
                lg={6}
                xl={6}
                xs={12}
                item
                className="img_heading"
              >
                <img src={logo} height="40" width="40" />
                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  zYF Protocol
                </h2>
              </Grid>
              <Grid
                sm={6}
                md={6}
                lg={6}
                xl={6}
                xs={12}
                className="nav_links"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid container justify="flex-end">
                  <Grid
                    item
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Grid item className="button4" onClick={openBlog}>
                      Blog
                    </Grid>
                  </Grid>
                  <Grid item style={{ minWidth: "150px" }}>
                    <Grid
                      container
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onClick={() => props.redirectToHome(true)}
                    >
                      <p
                        className="launch_app"
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",

                          margin: " 0 0 0 ",
                        }}
                      >
                        LaunchApp
                      </p>
                      <ArrowRightAltIcon
                        style={{ marginTop: "4px" }}
                        className="arrow_icon"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          style={{
            backgroundColor: "#498bf5",
          }}
        >
          <Grid item xs={9}>
            <Grid container className="aboutpage_div">
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                xl={8}
                lg={8}
                style={{ display: "flex", marginTop: "40px" }}
                className="aboutpage_detail"
              >
                <Grid container>
                  <Grid item xs={12}>
                    <Grid container justify={"center"}>
                      <Grid
                        item
                        xs={12}
                        style={{ display: "flex", marginBottom: "30px" }}
                      >
                        <h1>
                          Decentralized <br /> Seigniorage Insurance <br />{" "}
                          Protocol
                        </h1>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Grid container justify={"center"}>
                      <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            lineHeight: "26px",
                          }}
                        >
                          zYF connects insurance seekers to decentralized
                          insurance providers, made easy and backed by the zYF
                          protocol.
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      margin: "20px 0px",
                    }}
                  >
                    <Grid
                      container
                      justify={"center"}
                      className="aboutpage_buttons"
                    >
                      <Grid item xs={12}>
                        <Grid container style={{ marginTop: "15px" }}>
                          <Grid
                            item
                            style={{ marginTop: "5px", marginRight: "15px" }}
                          >
                            <button
                              className="launch_text"
                              onClick={() => props.redirectToHome(true)}
                            >
                              Launch App
                            </button>
                          </Grid>

                          <Grid item style={{ marginTop: "5px" }}>
                            <button
                              className="lite_paper"
                              onClick={openLitePaper}
                            >
                              Litepaper
                            </button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} style={{ margin: "15px 0 40px" }}>
                    <Grid container justify="center">
                      <Grid item xs={12}>
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                        >
                          join our community!
                        </p>
                        <div className="aboutpage_logo">
                          <img
                            src={twitterwhite}
                            style={{ height: "40px", width: "40px" }}
                            onClick={() => openMedia("twitter")}
                            className="logo2"
                          />
                          <img
                            src={discordwhite1}
                            style={{
                              height: "40px",
                              width: "40px",
                              margin: "0px 15px",
                            }}
                            onClick={() => openMedia("fb")}
                            className="logo2"
                          />

                          <img
                            src={telegramwhite}
                            style={{ height: "40px", width: "40px" }}
                            onClick={() => openMedia("telegram")}
                            className="logo2"
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                xl={4}
                lg={4}
                className="aboutpage_img"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                  className="img-resp"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={9}>
            <Grid container className="detailpage_div">
              <Grid
                item
                xs={12}
                sm={12}
                md={11}
                xl={11}
                lg={11}
                className="protocol"
              >
                <Grid container style={{ margin: "15px 0px 0px 0px" }}>
                  <Grid xs={12} sm={12} md={6} xl={6} lg={6}>
                    <h2>What is zYF Protocol?</h2>

                    <p>
                      zYF does three things: offer protection against coupon
                      expiry; offer protection against instances of unpegging;
                      or, allow users to earn zYF by staking ETH as insurance
                      collateral.
                    </p>
                  </Grid>
                </Grid>
                <h3>Insurance on coupons</h3>
                <Grid>
                  <Grid
                    xs={12}
                    sm={12}
                    md={6}
                    xl={6}
                    lg={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <p>
                      Seigniorage coupons are high-risk, high-reward options on
                      seigniorage protocols. With zYF users can hedge risk
                      against coupon expiry, choosing the risk/reward ratio
                      which suits them.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container className="detail_img">
                <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  xl={6}
                  lg={6}
                  className="insurance_p"
                >
                  <Grid item xs={12}>
                    <Grid container justify={"center"}>
                      <Grid item xs={12}>
                        <h3>Insurance on Failed Peg</h3>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify={"center"}>
                      <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <p>
                          Should a supported seigniorage protocol outright fail
                          (not reach peg for 45+ days), users who have purchased
                          failed peg insurance receive compensation for all or
                          part of their lost stake.
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify={"center"}>
                      <Grid item xs={12}>
                        <h3>Become an Insurance Provider</h3>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify={"center"}>
                      <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <p>
                          Users can earn the zYF token only by staking ETH in
                          the zYF protocol pool, acting as insurance lenders and
                          being compensated fairly for their risks.
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify={"center"}>
                      <Grid item xs={12}>
                        <button className="read_blog" onClick={openBlog}>
                          Read our blog
                        </button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  xl={6}
                  lg={6}
                  className="detailpage_img"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${pic})`,
                      width: "350px",
                      height: "270px",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          style={{
            backgroundColor: "#498bf5",
          }}
        >
          <Grid item xs={9}>
            <Grid container className="footer_div">
              <Grid
                item
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p>zYF Protocol © 2021</p>
              </Grid>
              <Grid
                item
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    className="button4"
                    onClick={() => props.redirectToHome(true)}
                  >
                    App
                  </Grid>

                  <Grid item className="button4" onClick={openLitePaper}>
                    Litepaper
                  </Grid>

                  <Grid item className="button4" onClick={openBlog}>
                    Blog
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <p>
                  <img
                    src={twitterwhite}
                    style={{ height: "40px", width: "40px" }}
                    onClick={() => openMedia("twitter")}
                    className="logo2"
                  />
                  <img
                    src={discordwhite1}
                    style={{
                      height: "40px",
                      width: "40px",
                      margin: "0px 15px",
                    }}
                    onClick={() => openMedia("fb")}
                    className="logo2"
                  />

                  <img
                    src={telegramwhite}
                    style={{ height: "40px", width: "40px" }}
                    onClick={() => openMedia("telegram")}
                    className="logo2"
                  />
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
