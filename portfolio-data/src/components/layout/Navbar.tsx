import Logo from "./Logo";
import Navigation from "./Navigation";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
    return (
        <header>
            <Logo />

            <Navigation />

            <NavbarActions />
        </header>
    );
}