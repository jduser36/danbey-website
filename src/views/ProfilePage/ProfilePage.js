import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
//import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/myself_1.jpg";

import studio3 from "assets/img/myImages/wangerooge_bob_remasterd_3.jpeg";
import studio4 from "assets/img/myImages/wangerooge_bob_remasterd_4.jpeg";
import studio5 from "assets/img/myImages/wangerooge_bob_remasterd_5.jpeg";
import studio6 from "assets/img/myImages/wangerooge_bob_remasterd_6.jpeg";
import studio3_thum from "assets/img/myImages/thumbnails/wangerooge_bob_remasterd_3_thum.jpeg";
import studio4_thum from "assets/img/myImages/thumbnails/wangerooge_bob_remasterd_4_thum.jpeg";
import studio5_thum from "assets/img/myImages/thumbnails/wangerooge_bob_remasterd_5_thum.jpeg";
import studio6_thum from "assets/img/myImages/thumbnails/wangerooge_bob_remasterd_6_thum.jpeg";


import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Muted from "components/Typography/Muted.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="danbey.de"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/nik_yosemite.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Daniel Beyer</h3>
                    <h6>Photographer and Softwaredeveloper</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Hi, dies ist meine kleine Webseite, um euch als Blog etwas &uuml;ber meine Fotographie, meine Hobbies und meine 
                Sotfwareentwicklungs - Projekte zu berichten.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                     {
                      tabButton: "Entwicklung",
                      tabIcon: Palette,
                      tabContent: (
                        <div>
                          <h1>Minikube Anleitung</h1>
                          <Muted>
                           <div style={{ textAlign: 'left' }}>
                            <p>
                            Hier meine erst kleine Anleitung &uuml;ber die Verwendung von Minikube. Minikube ist eine lokale Kubernetes - Umgebung und eignet
                            sich f&uuml;r die Installation auf dem eigenen Laptop oder oder in einem Dockercontainer f&uuml;r Entwicklungszwecke.</p>

                            <p>Die Anleitung dient dazu euch die wichtigsten Befehle aufzuzeigen und als kleines HowTo!</p>

                            <p>Einige Befehle, basierend auf der Webseite von @svenwltr: </p>
                            <br/>
                            <p># Start minikube<br/>
                            <code>minikube start</code>
                            </p>
                            <p># Set docker env<br/>
                            <code>eval $(minikube docker-env)</code>
                            </p>
                            <p># Build image<br/>
                            <code>docker build -t foo:0.0.1 .</code> 
                            </p>
                            <p># Run in minikube<br/>
                            <code>kubectl run hello-foo --image=foo:0.0.1 --image-pull-policy=Never</code>
                            </p>
                            <p># Check that it's running<br/>   
                            <code>kubectl get pods</code>
                            </p>
                            
                            <p>Starten von Minikube für den Mac-Book:<br/>
                            <code>minikube start — vm-driver=hyperkt</code></p>

                            <p>Kubernetes Dashboard öffnen:<br/>
                            <code>minikube dashboard</code></p>
                            <p>Es sollte nun unter http://127.0.0.1:8001 ein K8s-Dashboard verfügbar sein.</p>

                            <p>Kubernetes mit Verwendung einer bereits lokal installierten Dockerumgebung und ohne einer zentralen Containerregistry.</p>
                            <code>
                              kubectl cluster-info 
                              eval $(minikube docker-env) 
                              cd minikube-app/
                              docker build -t minikube-app:latest .
                              kubectl create deployment minikube-app --image=minikube-app:latest --image-pull-policy=Never
                            </code>
                            </div>
                          </Muted> 
                        </div>   
                      )
                    },
                    {
                      tabButton: "Fotographie",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <a
                              href={studio3}
                              target="_blank"
                              alt="..."
                              rel="noopener noreferrer"
                            >
                            <img
                              alt="..."
                              src={studio3_thum}
                              className={navImageClasses}
                            /></a>
                            <a
                              href={studio4}
                              target="_blank"
                              alt="..."
                              rel="noopener noreferrer"
                            >
                            <img
                              alt="..."
                              src={studio4_thum}
                              className={navImageClasses}
                            /></a>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <a
                              href={studio5}
                              target="_blank"
                              alt="..."
                              rel="noopener noreferrer"
                            >
                            <img
                              alt="..."
                              src={studio5_thum}
                              className={navImageClasses}
                            /></a>
                            <a
                              href={studio6}
                              target="_blank"
                              alt="..."
                              rel="noopener noreferrer"
                            ><img
                              alt="..."
                              src={studio6_thum}
                              className={navImageClasses}
                            /></a>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
