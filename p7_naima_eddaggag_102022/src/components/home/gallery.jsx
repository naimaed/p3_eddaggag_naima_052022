// import { useState, useEffect } from "react";
// import Card from "../card/card";
import React from "react";
import Logements from "../../logements.json";
import ".//gallery.css";

export default function Gallery() {
	return (
		<div className="display">
			{Logements &&
				Logements.map((logement) => {
					return (
						<div className="card" key={logement.id}>
							<img className="img" src={logement.cover} alt="logement" />

							<div className="title">{logement.title}</div>
						</div>
					);
				})}
		</div>
	);
}
