const F_registro_p = () => {
    return (
    <>
       <div className="container">
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">                
                <div className="card">
                    <div className="card-header">
                        REGISTRAR PEDIDO
                    </div>
                    <div className="card-body">
                        <form action="" method="post">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <label for="fecha" className="form-label">FECHA</label>
                                        <input type="date" className="form-control" name="fecha" id="fecha" aria-describedby="helpId" ></input>
                                      </div>
                                    <div className="col">
                                        <label for="hora" className="form-label">HORA</label>
                                        <input type="time" className="form-control" name="hora" id="hora" aria-describedby="helpId" ></input>
                                      </div>
                                      <div className="col">
                                        <label for="estado" className="form-label">ESTADO</label>
                                        <input type="text" className="form-control" name="estado" id="estado" aria-describedby="helpId" ></input>
                                      </div>
                                </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <label for="largo" className="form-label">largo</label>
                                        <input type="number" className="form-control" name="largo" id="largo" aria-describedby="helpId" ></input>
                                      </div>
                                    <div className="col">
                                        <label for="largo2" className="form-label">largo</label>
                                        <input type="number" className="form-control" name="largo2" id="largo2" aria-describedby="helpId" ></input>
                                      </div>
                                      <div className="col">
                                        <label for="alto" className="form-label">alto</label>
                                        <input type="number" className="form-control" name="alto" id="alto" aria-describedby="helpId" ></input>
                                      </div>
                                      <div className="col">
                                        <label for="peso" className="form-label">peso</label>
                                        <input type="number" className="form-control" name="peso" id="peso" aria-describedby="helpId" ></input>
                                      </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label for="d_recogida" className="form-label">DIRECCION RECOGIDA</label>
                                <input type="text" className="form-control" name="d_recogida" id="d_recogida" aria-describedby="helpId" ></input>
                              </div>
                            <div className="mb-2">
                                <label for="c_recogida" className="form-label">CIUDAD RECOGIDA</label>
                                <input type="text" className="form-control" name="c_recogida" id="c_recogida" aria-describedby="helpId" ></input>
                              </div>
                            <div className="mb-2">
                                <label for="destinatario" className="form-label">NOMBRE DEL DESTINATARIO</label>
                                <input type="text" className="form-control" name="destinatario" id="destinatario" aria-describedby="helpId" ></input>
                              </div>
                            <div className="mb-2">
                                <label for="cedula" className="form-label">CEDULA DEL DESTINATARIO</label>
                                <input type="number" className="form-control" name="cedula" id="cedula" aria-describedby="helpId" ></input>
                              </div>
                            <div className="mb-2">
                              <label for="direccion" className="form-label">DIRECCION ENTREGA</label>
                              <input type="text" className="form-control" name="d_entrega" id="d_entrega" aria-describedby="helpId" ></input>
                            </div>
                            <div className="mb-2">
                                <label for="ciudad" className="form-label">CIUDAD DE ENTREGA</label>
                                <input type="text" className="form-control" name="passw" id="passw" aria-describedby="helpId" ></input>
                              </div>
                              <button type="submit" className="btn btn-primary">ACTUALIZAR</button>
                              </div>
                        </form>
                    </div>
                    <div className="card-footer text-muted">
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            </div>
        </div>
    </div>
    </>
)
}
export default F_registro_p





