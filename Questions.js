import React, { useState } from "react";
import Select from "react-select";
import { Row, Col, Container, Button } from "react-bootstrap";
import "../assets/styles/Questions.scss";
import Ques from "../components/FormInput/Ques";
import Ques2 from "../components/FormInput/Ques2";
import Siderbar from "../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Questions = () => {
  const options = [
    {
      value: "CALCULUS",
      label: "calculus",
    },
    {
      value: "ADBMS",
      label: "Adbms",
    },
    {
      value: "JAVA",
      label: "java",
    },
  ];

  const options2 = [
    {
      value: "",
      label: "",
    },
    {
      value: "MCQ1",
      label: "McqOne",
    },
    {
      value: "TRUE/FALSE",
      label: "true/false",
    },
  ];

  const [ques, setQues] = useState(options2[0].value);
  console.log(ques);

  return (
    <Siderbar>
      <div className="color">
        <Container className="cont">
          <h1 className="pb-5">
            <strong>Manage Questions and Answers</strong>
          </h1>
          <Link to="questions">
            <Button variant="primary add-main">Add Questions</Button>
          </Link>

          <Link to="view_questions">
            <Button variant="outline-primary view-btn">View Questions</Button>
          </Link>
          <Row
            className=" border border-dark pb-4 pt-4 mt-4 mb-4"
            md={6}
            sm={12}
            xs={6}
          >
            <div md={6}></div>
            <Col md={6} sm={12} xs={12}>
              <label className="label">
                <strong>Select Subject :</strong>
              </label>
              <Select options={options} />

              <label className="label">
                <strong>Question Type :</strong>
              </label>
              <Select
                options={options2}
                onChange={(item) => {
                  setQues(item.value);
                }}
                // value={ques}
                placeholder={`Select One`}
                getOptionValue={(options2) => options2.value}
                getoptionsLabel={(options2) => options2.label}
              />

              {ques === "MCQ1" ? <Ques /> : null}
            </Col>
          </Row>
        </Container>
      </div>
    </Siderbar>
  );
};
export default Questions;
