import "./card.css";

export default function Card(props) {
	const title = props.title;
	return (
		<div className="carte">
			<h2>{title}</h2>
		</div>
	);
}
