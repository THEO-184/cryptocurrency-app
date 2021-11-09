import React from "react";
import { useState, useEffect, useRef } from "react";
import millify from "millify";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
const CryptoCurrencies = ({ simplified }) => {
	const inputRef = useRef(null);
	const count = simplified ? 10 : 100;
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
	const [cryptos, setCryptos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const filteredData = cryptosList?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setCryptos(filteredData);
		cryptos ?? inputRef.current.focus();
	}, [cryptosList, searchTerm]);

	if (isFetching) {
		return <Loader />;
	}

	return (
		<>
			{!simplified && (
				<div className="search-crypto">
					<Input
						placeholder="search Cryptocurrency"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						ref={inputRef}
					/>
				</div>
			)}
			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos?.map((currency) => {
					return (
						<Col
							xs={24}
							sm={12}
							lg={6}
							className="crypto-card"
							key={currency.id}
						>
							<Link to={`/crypto/${currency.id}`}>
								<Card
									hoverable
									title={`${currency.rank}. ${currency.name}`}
									extra={
										<img
											className="crypto-image"
											alt={currency.name}
											src={currency.iconUrl}
										/>
									}
								>
									<p>Price: {millify(currency.price)}</p>
									<p>Market Cap: {millify(currency.marketCap)}</p>
									<p>Daily Change: {millify(currency.change)}%</p>
								</Card>
							</Link>
						</Col>
					);
				})}
			</Row>
		</>
	);
};

export default CryptoCurrencies;
