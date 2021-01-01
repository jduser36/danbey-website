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
//import work1 from "assets/img/examples/olu-eletu.jpg";
//import work2 from "assets/img/examples/clem-onojeghuo.jpg";
//import work3 from "assets/img/examples/cynthia-del-rio.jpg";
//import work4 from "assets/img/examples/mariya-georgieva.jpg";
//import work5 from "assets/img/examples/clem-onojegaw.jpg";

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
                I am Daniel based in Germany. This is my small blog about photography and some 
                development projects.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Photography",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio6}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Development",
                      tabIcon: Palette,
                      tabContent: (
                        <div>
                          <h1>Minikube Anleitung</h1>
                          <Muted>
                            <p>
                            Hier meine erst kleine Anleitung &uuml;ber die Verwendung von Minikube. Minikube ist eine lokale Kubernetes - Umgebung und eignet
                            sich f&uuml;r die Installation auf dem eigenen Laptop oder oder in einem Dockercontainer f&uuml;r Entwicklungszwecke.</p>

                            <p>Die Anleitung dient dazu euch die wichtigsten Befehle aufzuzeigen und als kleines HowTo!</p>

                            What worked for me, based on the solution by @svenwltr: 
                            # Start minikube
                            <code>minikube start</code>

                            # Set docker env
                            <code>eval $(minikube docker-env)</code>

                            # Build image
                           <code>docker build -t foo:0.0.1 .</code> 

                            # Run in minikube
                            <code>kubectl run hello-foo --image=foo:0.0.1 --image-pull-policy=Never</code>

                            # Check that it's running
                            <code>kubectl get pods</code>

                            <p>Lokales Kubernetes/Minikube starten: <code>minikube start</code></p>

                            <p>Starten von Minikube für den Mac-Book: <code>minikube start — vm-driver=hyperkt</code></p>

                            <p>Kubernetes Dashboard öffnen:  <code>minikube dashboard</code></p>
                            Es sollte nun unter http://127.0.0.1:8001 ein K8s-Dashboard verfügbar sein.

                            <p>Kubernetes mit Verwendung einer bereits lokal installierten Dockerumgebung und ohne einer zentralen Containerregistry.</p>
                            <code>
                            kubectl cluster-info 
                            eval $(minikube docker-env) 
                            cd minikube-app/
                            docker build -t minikube-app:latest .
                            kubectl create deployment minikube-app --image=minikube-app:latest --image-pull-policy=Never
                            </code>
                          </Muted> 
                        </div>   
                      )
                    }
                   
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
