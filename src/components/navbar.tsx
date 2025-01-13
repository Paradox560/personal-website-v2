import './navbar.css'; // Import CSS for styling

const Navbar = () => {
    return (
        <header id="header" className="header d-flex flex-column justify-content-center">
            <i className="header-toggle d-xl-none bi bi-list"></i>
            <nav id="navmenu" className="navmenu">
                <ul>
                    <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i><span>Home</span></a></li>
                    <li><a href="#about"><i className="bi bi-person navicon"></i><span>About</span></a></li>
                    <li><a href="#skills"><i className="bi bi-tools navicon"></i><span>Skills</span></a></li>
                    <li><a href="#experience"><i className="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
                    <li><a href="#projects"><i className="bi bi-images navicon"></i><span>Projects</span></a></li>
                    <li><a href="#certificates"><i className="bi bi-patch-check navicon"></i><span>Certificates</span></a></li>
                    <li><a href="#contact"><i className="bi bi-envelope navicon"></i><span>Contact</span></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;