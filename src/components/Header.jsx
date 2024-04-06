export default function Header(){
    return(
        <div className="headercontainer">
            <header className="cabecalho">
                <a href="#"><h1 className="logo">WS</h1></a>
                <div className="container-header-separation">
                <ul>
                    
                    <li>
                        <a href="#projects" className="headerproj">My proj.</a>
                    </li>
                </ul>
                </div>
            </header>
        </div>
    )
}