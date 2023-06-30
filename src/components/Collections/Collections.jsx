import React from "react";
import { Card } from "antd";
import { Col, Row } from "antd";

import collectionPic1 from "../Images/collection1.jpg";
import collectionPic2 from "../Images/collection2.jpg";
import collectionPic3 from "../Images/collection3.jpg";
import collectionPic4 from "../Images/collection4.jpg";

import "./collections.css";

const { Meta } = Card;

const Collections = () => {
  return (
    <div className="collections-container">
      <Row gutter={[24, 20]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={14}>
          <Card
            hoverable
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
            cover={
              <div style={{ position: "relative" }}>
                <img
                  alt="example"
                  src={collectionPic1}
                  style={{
                    width: "100%",
                    maxHeight: "450px",
                    objectFit: "cover",
                    objectPosition: "middle",
                  }}
                />
                <div className="hover-title">
                  <Meta title="Wedding Photos" />
                </div>
              </div>
            }
            onMouseEnter={(e) => {
              e.currentTarget.querySelector(".hover-title").style.opacity = 1;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".hover-title").style.opacity = 0;
            }}
          >
            <Meta title="Wedding Photos" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={10}>
          <Card
            hoverable
            style={{
              width: "100%",
              height: "100%",
            }}
            cover={
              <div style={{ position: "relative" }}>
                <img
                  alt="example"
                  src={collectionPic2}
                  style={{
                    width: "100%",
                    maxHeight: "450px",
                    objectFit: "cover",
                    objectPosition: "middle",
                  }}
                />
                <div className="hover-title">
                  <Meta title="Engagement" />
                </div>
              </div>
            }
            onMouseEnter={(e) => {
              e.currentTarget.querySelector(".hover-title").style.opacity = 1;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".hover-title").style.opacity = 0;
            }}
          >
            <Meta title="Engagement" />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12} xl={10}>
          <Card
            hoverable
            style={{
              width: "100%",
              height: "100%",
            }}
            cover={
                <div style={{ position: "relative" }}>
                  <img
                    alt="example"
                    src={collectionPic3}
                    style={{
                      width: "100%",
                      maxHeight: "450px",
                      objectFit: "cover",
                      objectPosition: "middle",
                    }}
                  />
                  <div className="hover-title">
                    <Meta title="Batchlor Party" />
                  </div>
                </div>
              }
              onMouseEnter={(e) => {
                e.currentTarget.querySelector(".hover-title").style.opacity = 1;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector(".hover-title").style.opacity = 0;
              }}
            >
            <Meta title="Batchlor Party" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={14}>
          <Card
            hoverable
            style={{
              width: "100%",
              height: "100%",
            }}
            cover={
                <div style={{ position: "relative" }}>
                  <img
                    alt="example"
                    src={collectionPic4}
                    style={{
                      width: "100%",
                      maxHeight: "450px",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                  <div className="hover-title">
                    <Meta title="Highlights" />
                  </div>
                </div>
              }
              onMouseEnter={(e) => {
                e.currentTarget.querySelector(".hover-title").style.opacity = 1;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector(".hover-title").style.opacity = 0;
              }}
            >
            <Meta title="Highlights" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Collections;
