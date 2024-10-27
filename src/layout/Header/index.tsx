import { ReactNode } from "react";

interface HeaderProps {
	children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
	return <header className="comnica-header">{children}</header>;
};

export default Header;
