const Formulario_login = () => {
    return (
        <>
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">                
                <div className="card">
                    <div className="card-header">
                        inicio de sesion
                    </div>
                    <div className="card-body">
                        <form action="" method="post">
                            <div className="mb-3">
                              <label htmlFor="usuario" className="form-label">Usuario</label>
                              <input type="text" className="form-control" name="usuario" id="usuario"  aria-describedby="helpId" placeholder="Escriba su usuario"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passw" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" name="passw" id="passw" aria-describedby="helpId" placeholder="Escriba su contraseña"></input>
                              </div>
                              <button type="submit" className="btn btn-primary">Entrar</button>
                        </form>
                    </div>
                    <div className="card-footer text-muted">
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            </div>
        </div>
    </>
)
}
export default Formulario_login





