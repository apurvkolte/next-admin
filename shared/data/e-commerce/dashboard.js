import React, { useState } from 'react'
import * as edashboard from "./edashboard"
import WorldMap from "react-svg-worldmap";
import Chart from 'chart.js/auto';
import { Card, Col, ListGroup, ProgressBar, Row, Table, Dropdown } from "react-bootstrap";
import Link from 'next/link';
import { Line } from "react-chartjs-2";

//images 
import user3 from "../../../public/assets/img/users/3.jpg";
import user4 from "../../../public/assets/img/users/4.jpg";
import user5 from "../../../public/assets/img/users/5.jpg";
import user7 from "../../../public/assets/img/users/7.jpg";
import user9 from "../../../public/assets/img/users/9.jpg";
import png14 from "../../../public/assets/img/pngs/14.png";
import png15 from "../../../public/assets/img/pngs/15.png";
import png16 from "../../../public/assets/img/pngs/16.png";
import png17 from "../../../public/assets/img/pngs/17.png";
import png18 from "../../../public/assets/img/pngs/18.png";
import png19 from "../../../public/assets/img/pngs/19.png";
import ReactApexChart from 'react-apexcharts';

const ProductsDetails =
  [
    { Productid: "#C234", Productname: png14.src, Producttext: "Regular Backpack", Productcost: "$14,500", Total: "2,977", Status: "Available", Statustext: "primary", },
    { Productid: "#C389", Productname: png15.src, Producttext: "Women Pink Sandal", Productcost: "$30,000", Total: "678	", Status: "Limited", Statustext: "primary", },
    { Productid: "#C936", Productname: png16.src, Producttext: "Designer Flower Pot", Productcost: "$13,200", Total: "4,922	", Status: "Available", Statustext: "primary", },
    { Productid: "#C493", Productname: png17.src, Producttext: "Plastic Outdoor Chair", Productcost: "$14,500", Total: "1,234", Status: "Limited", Statustext: "primary", }, { Productid: "#C729", Productname: png18.src, Producttext: "Digital Smart Watch", Productcost: "$5,987", Total: "4,789", Status: "NoStock", Statustext: "primary  op-5", },
    { Productid: "#C529", Productname: png19.src, Producttext: "Apple iPhone", Productcost: "$11,987", Total: "938", Status: "Limited", Statustext: "primary", },
  ];
const Dashboardecommerce = () => {
  const [content, setContent] = useState("");
  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];
  return (
    <div>
      <Row className="row-sm">
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-order ">
                <label className="main-content-label mb-3 pt-1">
                  New Users
                </label>
                <h2 className="text-end card-item-icon card-icon">
                  <i className="mdi mdi-account-multiple icon-size float-start text-primary"></i>
                  <span className="font-weight-bold">3,672</span>
                </h2>
                <p className="mb-0 mt-4 text-muted">
                  Monthly users<span className="float-end">50%</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-order">
                <label className="main-content-label mb-3 pt-1">
                  Total tax
                </label>
                <h2 className="text-end">
                  <i className="mdi mdi-cube icon-size float-start text-primary"></i>
                  <span className="font-weight-bold">$89,265</span>
                </h2>
                <p className="mb-0 mt-4 text-muted">
                  Monthly Income<span className="float-end">$7,893</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-order">
                <label className="main-content-label mb-3 pt-1">
                  Total Profit
                </label>
                <h2 className="text-end">
                  <i className="icon-size mdi mdi-poll-box   float-start text-primary"></i>
                  <span className="font-weight-bold">$23,987</span>
                </h2>
                <p className="mb-0 mt-4 text-muted">
                  Monthly Profit<span className="float-end">$4,678</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-order">
                <label className="main-content-label mb-3 pt-1">
                  Total Sales
                </label>
                <h2 className="text-end">
                  <i className="mdi mdi-cart icon-size float-start text-primary"></i>
                  <span className="font-weight-bold">46,486</span>
                </h2>
                <p className="mb-0 mt-4 text-muted">
                  Monthly Sales<span className="float-end">3,756</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col xxl={3} xl={6} md={12} lg={12}>
          <Card className="custom-card">
            <Card.Header className="border-bottom-0 pb-0">
              <label className="main-content-label mb-2 pt-1">
                Recent Orders
              </label>
              <p className="tx-12 mb-0 text-muted">
                An order is an {`investor's`} instructions to a broker or brokerage
                firm to purchase or sell
              </p>
            </Card.Header>
            <Card.Body className="sales-product-info pb-0">
              <div id="recentorders" className="">
                <ReactApexChart
                  options={edashboard.radialbarchart.options}
                  series={edashboard.radialbarchart.series}
                  type="radialBar"
                  height={270}
                />
              </div>
              <div className="row sales-product-infomation pb-0 mb-0 mx-auto wd-100p">
                <div className="col-md-6 col justify-content-center text-center">
                  <p className="mb-0 d-flex justify-content-center ">
                    <span className="legend bg-primary brround"></span>Delivered
                  </p>
                  <h3 className="mb-1 font-weight-bold">5238</h3>
                  <div className="d-flex justify-content-center ">
                    <p className="text-muted ">Last 6 months</p>
                  </div>
                </div>
                <div className="col-md-6 col text-center float-end">
                  <p className="mb-0 d-flex justify-content-center ">
                    <span className="legend bg-light brround"></span>Cancelled
                  </p>
                  <h3 className="mb-1 font-weight-bold">3467</h3>
                  <div className="d-flex justify-content-center ">
                    <p className="text-muted">Last 6 months</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <Row className="row-sm">
        <Col md={12} xl={8}>
          <Card className=" custom-card overflow-hidden">
            <Card.Header className="border-bottom-0 d-flex">
              <div>
                <label className="main-content-label mb-2 pt-1">
                  Products Details
                </label>
                <p className="tx-12 mb-3 text-muted">
                  The details displayed often include size, color, price,
                  shipping information, reviews, and other relevant information
                  customers may want to know before making a purchase
                </p>
              </div>
              <Dropdown className="card-options float-end">
                <Dropdown.Toggle
                  className="me-0 text-default option-dots"
                  role="button"
                  variant="default"

                >
                  <span className="fe fe-more-vertical tx-17 float-end"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className=" dropdown-menu-end" role="menu" style={{ marginTop: "0px" }}>
                  <Dropdown.Item href="#!">
                    <i className="fe fe-eye me-2"></i>View
                  </Dropdown.Item>
                  <Dropdown.Item href="#!">
                    <i className="fe fe-plus-circle me-2"></i>Add
                  </Dropdown.Item>
                  <Dropdown.Item href="#!">
                    <i className="fe fe-trash-2 me-2"></i>Remove
                  </Dropdown.Item>
                  <Dropdown.Item href="#!">
                    <i className="fe fe-download-cloud me-2"></i>Download
                  </Dropdown.Item>
                  <Dropdown.Item href="#!">
                    <i className="fe fe-settings me-2"></i>More
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header >
            <Card.Body className="pt-0">
              <div className="table-responsive">
                <Table
                  className="table table-vcenter border mb-0 text-nowrap table-product">
                  <thead className="border-bottom">
                    <tr>
                      <th>Product ID</th>
                      <th>Product</th>
                      <th>Product Cost</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ProductsDetails.map((Items, index) => (
                      <tr key={index} data-index={index}>
                        <td>{Items.Productid}</td>
                        <td className="d-flex my-auto">
                          <div className="ht-40 wd-40 me-3">
                            <img
                              src={Items.Productname}
                              alt=""
                            />
                          </div>
                          <span className="my-auto">{Items.Producttext}</span>
                        </td>
                        <td>
                          <b>{Items.Productcost}</b>
                        </td>
                        <td>{Items.Total}</td>
                        <td>
                          <span className={`badge bg-${Items.Statustext}`}>
                            {Items.Status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card >
        </Col >

      </Row >
    </div>
  )
}

export default Dashboardecommerce