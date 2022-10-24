import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
	return (
		<div>
			<h1>404</h1>
			<div>Oups! La page que vous demandez n'existe pas.</div>
			<Link to="/navbar/navbar">
				<div>retourner sur la page d'accueil</div>
			</Link>
		</div>
	);
}
