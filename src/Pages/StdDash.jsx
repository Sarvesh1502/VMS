/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./StdDash.css";

const StdDash = () => {
  return (
    <div style={{ paddingTop: "60px" }}>
      <div className="container mt-5">
        <h1>Your Dashboard</h1>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Total Hours Volunteered</Card.Title>
                <Card.Text>15 Hours</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Events Participated</Card.Title>
                <Card.Text>3 Events</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Upcoming Events</Card.Title>
                <Card.Text>2 Events</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StdDash;
