import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Exchanges from "./components/Exchanges";
import CryptoCurrencies from "./components/CryptoCurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
import { Layout } from "antd";
import { Typography } from "antd";
const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Switch>
							<Route exact path="/">
								<Homepage />
							</Route>
							<Route exact path="/exchanges">
								<Exchanges />
							</Route>
							<Route exact path="/cryptoCurrencies">
								<CryptoCurrencies />
							</Route>
							<Route exact path="/crypto/:coinId">
								<CryptoDetails />
							</Route>
							<Route exact path="/news">
								<News />
							</Route>
						</Switch>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title
						level={5}
						style={{ color: "white", textAlign: "center" }}
					>
						CryptoWorld <br />
						All rights reserved <span>&copy;</span> DevTheo 2021.
					</Typography.Title>
					<space>
						<Link to="/">Home</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/news">news</Link>
					</space>
				</div>
			</div>
		</div>
	);
};

export default App;
