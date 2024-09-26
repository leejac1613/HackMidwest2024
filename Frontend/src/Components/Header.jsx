import Button from 'react-bootstrap/Button';
function Header(){
    return(
        <header>
            <h1>My First React Website</h1>
            <nav>
                <ul>
                    <li>
                        <a href = "#">Home</a>
                    </li>
                    <li>
                        <a href = "#">About</a>
                    </li>
                    <li><a href = "#">Services</a></li>
                    <li><a href = "#"><Button variant = "secondary">Contact</Button></a></li>

                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}
export default Header;