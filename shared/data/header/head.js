import Link from 'next/link';
import React from 'react'
import { Dropdown, Container, Form, Nav, Navbar, InputGroup, } from "react-bootstrap";
import Selectoptions from './headerdata';
import frenchflag from "../../../public/assets/img/flags/french_flag.jpg"
import germanyflag from "../../../public/assets/img/flags/germany_flag.jpg"
import italyflag from "../../../public/assets/img/flags/italy_flag.jpg"
import russiaflag from "../../../public/assets/img/flags/russia_flag.jpg"
import spainflag from "../../../public/assets/img/flags/spain_flag.jpg"
import users1 from "../../../public/assets/img/users/1.jpg"
import users2 from "../../../public/assets/img/users/2.jpg"
import users3 from "../../../public/assets/img/users/3.jpg"
import users5 from "../../../public/assets/img/users/5.jpg"

const HeadDropDown = () => {

  function Fullscreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement === null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      }
      else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      }
      else if
        (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    }
    else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if
        (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if
        (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  const Darkmode = () => {
    document.querySelector("body").classList.toggle("dark-theme");
    document.querySelector("#myonoffswitch2").checked = true
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("Spruhadark", true)
      document.querySelector('#myonoffswitch2').checked = true
      document.querySelector('#myonoffswitch8').checked = true
      document.querySelector('#myonoffswitch5').checked = true
    }
    else {
      localStorage.removeItem("Spruhadark")
      document.querySelector('#myonoffswitch2').checked = false
      document.querySelector('#myonoffswitch8').checked = false
      document.querySelector("#myonoffswitch6").checked = true
    }
  }

  const openCloseSidebar1 = () => {
    document.querySelector(".header-settings").classList.toggle("show");
    document.querySelector(".sidebar-right").classList.toggle("sidebar-open");
  };

  return (
    <div className="d-flex order-lg-2 align-items-center ms-auto">

      <Dropdown className="dropdown d-flex main-header-theme">
        <Nav.Link className="nav-link icon layout-setting" onClick={() => Darkmode()}>
          <span className="dark-layout">
            <i className="fe fe-sun header-icons"></i>
          </span>
          <span className="light-layout">
            <i className="fe fe-moon header-icons"></i>
          </span>
        </Nav.Link>
      </Dropdown>

      <div className="d-md-flex">
        <div
          className="nav-link icon full-screen-link"
          onClick={Fullscreen}
        >
          <i className="fe fe-maximize fullscreen-button fullscreen header-icons"></i>
          <i className="fe fe-minimize fullscreen-button exit-fullscreen header-icons"></i>
        </div>
      </div>
      {/* <Dropdown className=" main-header-notification">
                    <Dropdown.Toggle
                      className="nav-link icon"
                      href="#!"
                      variant="default"
                    >
                      <i className="fe fe-bell header-icons"></i>
                      <span className="badge bg-danger nav-link-badge">4</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: 0 }}
                    >
                      <div className="header-navheading">
                        <p className="main-notification-text">
                          You have 1 unread notification
                          <span className="badge bg-pill bg-primary ms-3">
                            View all
                          </span>
                        </p>
                      </div>
                      <div className="main-notification-list">
                        <Link href={`/components/advancedui/chat`}>
                        <div className="media new">
                          <div className="main-img-user online">
                            <img
                              alt="avatar"
                              src={users5.src}
                            />
                          </div>
                          <div className="media-body">
                            <p>
                              Congratulate <strong>Olivia James</strong> for New
                              template start
                            </p>
                            <span>Oct 15 12:32pm</span>
                          </div>
                        </div>
                        </Link>
                        <Link href={`/components/advancedui/chat`}>
                        <div className="media">
                          <div className="main-img-user">
                            <img
                              alt="avatar"
                              src={users2.src}
                            />
                          </div>
                          <div className="media-body">
                            <p>
                              <strong>Joshua Gray</strong> New Message Received
                            </p>
                            <span>Oct 13 02:56am</span>
                          </div>
                        </div>
                        </Link>
                        <Link href={`/components/advancedui/chat`}>
                        <div className="media">
                          <div className="main-img-user online">
                            <img
                              alt="avatar"
                              src={users3.src}
                            />
                          </div>
                          <div className="media-body">
                            <p>
                              <strong>Elizabeth Lewis</strong> added new
                              schedule realease
                            </p>
                            <span>Oct 12 10:40pm</span>
                          </div>
                        </div>
                        </Link>
                      </div>
                      <div className="dropdown-footer">
                        <Link href={`/components/advancedui/chat`}>
                          View All Notifications
                        </Link>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="main-header-notification">
                    <Link className="icon nav-link" href={`/components/advancedui/chat`}>
                      <i className="fe fe-message-square header-icons"></i>
                      <span className="badge bg-success nav-link-badge">6</span>
                    </Link>
                  </div> */}

    </div>
  )
}

export default HeadDropDown