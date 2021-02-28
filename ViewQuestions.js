import React, { useState } from "react";
import Siderbar from "../components/Sidebar/Sidebar";
import { Table, Row, Col, Container, Button } from "react-bootstrap";
import "../assets/styles/Questions.scss";
import { Link } from "react-router-dom";
import ModalComponent from "../components/Modal/ModalComponent";
import FormInput from "../components/FormInput/Form";

const ViewQuestions = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Table striped hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Subject Name</th>
                <th>Question</th>
                <th>Faculty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Java</td>
                <td>What is Inheritance?</td>
                <td>BSc.CSIT</td>
                <td>
                  <Button size="sm" variant="primary" onClick={handleShow}>
                    Edit
                  </Button>

                  <Button size="sm" variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <ModalComponent
            size={"md"}
            show={show}
            onHide={handleClose}
            title={"Edit Questions"}
            oncClick={handleClose}
            onClick={handleClose}
            type={"submit"}
          >
            <h5>Enter new Questions</h5>
            <FormInput placeholder={"Enter new Questions"} />
          </ModalComponent>
        </Container>
      </div>
    </Siderbar>
  );
};

export default ViewQuestions;
