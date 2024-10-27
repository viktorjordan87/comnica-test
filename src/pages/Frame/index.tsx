/* All pagas has a Header and a Main container. Put here elements the should be available everywhere. */
import "./index.scss";
import { Header } from "@components/Header";
import Main from "@layout/Main";
import backgroundUrl from "@assets/images/background_image.png";

export const Frame = () => {
	return (
		<div
			className="comnica-frame"
			style={{ backgroundImage: `url(${backgroundUrl})` }}
		>
			<Header />
			<Main />
		</div>
	);
};
