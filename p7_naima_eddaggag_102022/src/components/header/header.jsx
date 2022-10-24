import React from "react";
// import IMG from "../../assets/images/IMG.jpg";
// import logorouge from "../../assets/images/logorouge.png";
import "./header.css";
import Navbar from "../navbar/navbar";

export default function Header() {
	return (
		<div className="header">
			<div className="header-top">
				<img className="logorouge" src="{logorouge}" alt="logo" />
				<div>{Navbar}</div>
			</div>

			<img src="{IMG}" alt="montagnes" />
		</div>
	);
}
