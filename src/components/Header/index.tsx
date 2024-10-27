import logo from "@assets/images/logo.png";
import logoText from "@assets/images//logo_text.png";
import { Image } from "primereact/image";
import HeaderLayout from "@layout/Header";

export const Header = () => {
	return (
		<HeaderLayout>
			<div className="inline-flex align-items-center h-4rem">
				<Image
					src={logo}
					alt="logo"
					className="logo align-self-center mr-1 mt-1"
					width="26"
				/>
				<Image
					src={logoText}
					alt="logoText"
					className="logo-text"
					width="70"
				/>
			</div>
		</HeaderLayout>
	);
};
