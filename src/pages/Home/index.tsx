import "./index.scss";
import LandingImage from "@assets/svgs/Manage money-amico.svg";
import { Image } from "primereact/image";
import { Sidebar } from "./components/Sidebar";

export const Home = () => {
	return (
		<div className="page-home">
			<div className="home-title">
				<h1>Comnica Signature</h1>
				<p>Digitális aláíró szolgáltatás a Comnicától</p>
			</div>
			<Image
				src={LandingImage}
				alt="LandingImage"
				className="landing-image"
				pt={{
					image: { style: { transform: "scaleX(-1)" } },
				}}
			/>
			<Sidebar />
		</div>
	);
};
