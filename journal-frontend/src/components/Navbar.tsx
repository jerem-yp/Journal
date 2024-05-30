import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/journal.png'

function Navbar() {
    return (
        <>
            <nav className={"navbar navbar-expand-lg fixed-top navbar-light bg-light"} style={{height: '80px', fontSize: '20px'}} >

                <div className="container-fluid" style={{marginLeft: '20px', marginRight: '20px'}}>
                    <a className="navbar-brand" href="#">
                        <img src={logo} height="70" alt="" loading="lazy"/>
                    </a>

                    <img src="../assets/journal-small.jpg" height="30" alt="" loading="lazy"/>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/books">Books</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href={"/creative-writing"}>Creative Writing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;