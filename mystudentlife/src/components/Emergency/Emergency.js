import { Player, ControlBar } from "video-react";
import ReactDOM from "react-dom";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

function Emergency() {
  return (
    <div>
      <Container>
        <Row style={{ marginTop: `${50}px` }}>
          <Col sm={6}>
            <img
              src="https://opseu.org/wp-content/uploads/2019/06/red_cross.jpg"
              alt="new"
              width="550"
            />
          </Col>
          <Col sm={6}>
            <h1>
              <b>Emergency Contact</b>
            </h1>
            <p>
              Canada Suicide Prevention Service Hours: 24/7/365.
              <p>Languages: English, French </p>
              <p>Learn more 833-456-4566</p>
            </p>
            <b>Other Numbers</b>
            <p> Kids Help Phone 1-800-668-6888 </p>
            <p> Marine, Air Search & Rescue 1-800-267-7270</p>
            <p> Ontario Poison Centre 1-800-268-9017 </p>
            <p> Ontario Problem Gambling Helpline 1-888-230-3505</p>
            <p>Ontario Provincial Police 1-888-310-1122 </p>
            <p>Ontario Volunteer Emergency Response Team 1-800-668-6888 </p>
            <p> TeleHealth 1-866-797-0000</p>
            <p> TTY: 1-866-797-0007 </p>
            <p> Toronto Emergency Medical Services 4330 Dufferin St Toronto </p>
            <p> 416-392-2000 Toronto Fire Services 4330 Dufferin St Toronto </p>
            <p> 416-338-9050 Toronto Police Service 40 College St Toronto </p>
            <p>
              {" "}
              416-808-2222 VirtualWalk - Ontario City Information 519-488-1430{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Emergency;
