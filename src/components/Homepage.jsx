import React from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import { Typography, Row, Col, Statistic } from "antd";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";
import Loader from "./Loader";
const { Title } = Typography;

const Homepage = () => {
	const { data, isFetching } = useGetCryptosQuery(10);
	const globalStates = data?.data?.stats;
	console.log(data);

	if (isFetching) return <Loader />;
	return (
		<>
			<Title level={2} className="heading">
				Global Crypto Stats
			</Title>
			<Row>
				<Col span={12}>
					<Statistic
						title="Total Cryptocurrencies"
						value={globalStates.total}
					></Statistic>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total Exchanges"
						value={millify(globalStates.totalExchanges)}
					></Statistic>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total Market Cap"
						value={millify(globalStates.totalMarketCap)}
					></Statistic>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total 24th Volume"
						value={millify(globalStates.total24hVolume)}
					></Statistic>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total Market"
						value={millify(globalStates.totalMarkets)}
					></Statistic>
				</Col>
			</Row>
			<div className="home-heading-container">
				<Title level={2} className="home-title">
					Top 10 Cryptocurrencies in the world
				</Title>
				<Title level={2} className="show-more">
					<Link to="/cryptoCurrencies">Show more</Link>
				</Title>
			</div>
			<CryptoCurrencies simplified />
			<div className="home-heading-container">
				<Title level={2} className="home-title">
					Latest Crypto News
				</Title>
				<Title level={2} className="show-more">
					<Link to="/news">Show more</Link>
				</Title>
			</div>
			<News simplified />
		</>
	);
};

export default Homepage;
