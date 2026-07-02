import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                🚀 <span>NEXGEN AI Suite</span>
            </div>

            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/#products">Products</a></li>
                <li><a href="/#about">About</a></li>
                <li>
                    <a
                        href="https://github.com/NEXGEN-AI038/NEXGEN-AI-Suite"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </li>
            </ul>

        </nav>
    );
}

export default Navbar;