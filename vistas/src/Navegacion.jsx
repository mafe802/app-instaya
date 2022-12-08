const Navegacion = () => {
    return(
    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
            <a className="nav-item nav-link " href="/">LOGIN</a>
            <a className="nav-item nav-link" href="/register">REGISTRO DE USUARIOS</a>
            <a className="nav-item nav-link" href="/lista">LISTA DE ORDENES</a>
            <a className="nav-item nav-link" href="/registrar_paquete">REGISTRO DE ORDENES (RECOGIDA)</a>
        </div>
    </nav>
    )
} 
export default Navegacion