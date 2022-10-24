import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Product() {
	let params = useParams();
	return (
		<div>
			<h1>aparment</h1>
			<Link to="/navbar/navbar"></Link>
			<div>{params.id}</div>
		</div>
	);
}
