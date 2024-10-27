import { Button } from "primereact/button";

export const Sidebar = () => {
	return (
		<aside className="home-sidebar">
			<h2>
				Üdvözlöm a <br />
				Comnica Signature-ben!
			</h2>
			<p>
				A következőekben végigvezetjük dokumentumai elfogadásán és aláírásán. A
				folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje
				el, ha készen áll rá.
			</p>
			<Button
				label="Kezdhetjük"
				rounded
				size="small"
				onClick={() => console.log("Kezdhetjüк")}
			/>
		</aside>
	);
};
