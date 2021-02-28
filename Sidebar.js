import React from "react";
import { Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import NavbarHeader from "../Navbar/Navbar";
import "./sidebar.scss";
import { SidebarData } from "./SidebarData.js";

const Sidebar = (props) => {
    return (
        <>
            <Row>
                <Col className="side-section" xs={12} md={3} sm={12}>
                    <ul className="sidebarlist">
                        {SidebarData.map((val, key) => {
                            return (
                                <li className='list-group-item'
                                    key={key}
                                    id={window.location.pathname === val.link ? "active" : ""}
                                    onClick={() => { window.location.pathname = val.link; }}
                                >
                                    {" "}
                                    <Row>
                                        <Col md={1}>{val.icon}</Col>
                                        <Col> {val.title}</Col>
                                    </Row>
                                </li>
                            );
                        })}
                    </ul>
                </Col>
                <Col xs={12} md={9} sm={12}>
                    {props.children}
                </Col>
            </Row>
        </>
    );
};

export default Sidebar;