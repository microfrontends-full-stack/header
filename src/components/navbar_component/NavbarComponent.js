import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function NavbarComponent() {
	const [activeTab, serActiveTab] = useState("Home");
	return (
		<Router>
			<Navbar bg="dark" variant="dark" className="header">
				<Container>
					<Navbar.Brand href="https://www.quind.io">
						{" "}
						<p>Quind</p>
					</Navbar.Brand>
					<Nav className="me-auto align-items-end">
						<Link className="nav-link" to="/home">
							<p
								className={`${activeTab === "Home" ? "active" : ""}`}
								onClick={() => serActiveTab("Home")}
							>
								Home
							</p>
						</Link>
						<Link className="nav-link" to="/create">
							<p
								className={`${activeTab === "Create" ? "active" : ""}`}
								onClick={() => serActiveTab("Create")}
							>
								Create User
							</p>
						</Link>
						<Link className="nav-link" to="/about">
							<p
								className={`${activeTab === "About" ? "active" : ""}`}
								onClick={() => serActiveTab("About")}
							>
								About
							</p>
						</Link>
					</Nav>
				</Container>
			</Navbar>
		</Router>
	);
}
