import Container from "../ui/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
    return (
        <header>
            <Container
                className="
                flex
                items-center
                justify-between
                p-2
            "
        >
                <Logo />

                <Navigation />

                <NavbarActions />
            </Container>
        </header>
    );
}