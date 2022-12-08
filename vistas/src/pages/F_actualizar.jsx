import { useParams } from "react-router-dom"
import { Formik, Form, Field } from 'formik';
let envios=[
  {
      
      fecha:"17/02/1999",
      horas:"12:00",
      estado:"activo",
      largo:"11",
      largo2:"22",
      alto:"22",
      peso:"33",
      d_recogida:"calle 4a",
      c_recogida:"maicao",
      destinatario:"manaure",
      cedula:"4663874",
      entrega:"calle 4a",
      ciudad_destino:"rioacha"
      
  }
]
const F_actualizar = () => {
  const {id}= useParams()
    return (
    <>
    <Formik
    initialValues={{
      fecha: envios.fecha,
      hora: envios.horas,
      estado: envios.estado,
      largo: envios.largo,
      largo2:envios.largo2,
      alto: envios.alto,
      peso: envios.peso,
      d_recogida: envios.d_recogida,
      c_recogida:envios.c_recogida,
      destinatario:envios.destinatario,
      cedula: envios.cedula,
      d_entrega:envios.entrega,
      ciudad:envios.ciudad_destino
				}}
    >
    <div className="container">
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">                
                <div className="card">
                    <div className="card-header">
                        ACTUALIZAR PEDIDO
                    </div>
                    <div className="card-body">
                        <Form action="" method="post">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="fecha" className="form-label">FECHA</label>
                                        <Field type="date" className="form-control" name="fecha" id="fecha" aria-describedby="helpId" ></Field>
                                      </div>
                                    <div className="col">
                                        <label htmlFor="hora" className="form-label">HORA</label>
                                        <Field type="time" className="form-control" name="hora" id="hora" aria-describedby="helpId" ></Field>
                                      </div>
                                      <div className="col">
                                        <label htmlFor="estado" className="form-label">ESTADO</label>
                                        <Field type="text" className="form-control" name="estado" id="estado" aria-describedby="helpId" ></Field>
                                      </div>
                                </div>
                                <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="largo" className="form-label">largo</label>
                                        <Field type="number" className="form-control" name="largo" id="largo" aria-describedby="helpId" ></Field>
                                      </div>
                                    <div className="col">
                                        <label htmlFor="largo2" className="form-label">largo</label>
                                        <Field type="number" className="form-control" name="largo2" id="largo2" aria-describedby="helpId" ></Field>
                                      </div>
                                      <div className="col">
                                        <label htmlFor="alto" className="form-label">alto</label>
                                        <Field type="number" className="form-control" name="alto" id="alto" aria-describedby="helpId" ></Field>
                                      </div>
                                      <div className="col">
                                        <label htmlFor="peso" className="form-label">peso</label>
                                        <Field type="number" className="form-control" name="peso" id="peso" aria-describedby="helpId" ></Field>
                                      </div>
                                    </div>
                                </div>
                             <div className="mb-2">
                                <label htmlFor="d_recogida" className="form-label">DIRECCION RECOGIDA</label>
                                <Field type="text" className="form-control" name="d_recogida" id="d_recogida" aria-describedby="helpId" ></Field>
                              </div>
                                <div className="mb-2">
                                <label htmlFor="c_recogida" className="form-label">CIUDAD RECOGIDA</label>
                                <Field type="text" className="form-control" name="c_recogida" id="c_recogida" aria-describedby="helpId" ></Field>
                              </div>
                                <div className="mb-2">
                                <label htmlFor="destinatario" className="form-label">NOMBRE DEL DESTINATARIO</label>
                                <Field type="text" className="form-control" name="destinatario" id="destinatario" aria-describedby="helpId" ></Field>
                              </div>
                                <div className="mb-2">
                                <label htmlFor="cedula" className="form-label">CEDULA DEL DESTINATARIO</label>
                                <Field type="number" className="form-control" name="cedula" id="cedula" aria-describedby="helpId" ></Field>
                              </div>
                                <div className="mb-2">
                              <label htmlFor="d_entrega" className="form-label">DIRECCION ENTREGA</label>
                              <Field type="text" className="form-control" name="d_entrega" id="d_entrega" aria-describedby="helpId" ></Field>
                                </div>
                                <div className="mb-2">
                                <label htmlFor="ciudad" className="form-label">CIUDAD DE ENTREGA</label>
                                <Field type="text" className="form-control" name="ciudad" id="ciudad" aria-describedby="helpId" ></Field>
                              </div>
                              <button type="submit" className="btn btn-primary">ACTUALIZAR</button>
                              </div>
                        </Form>
                    </div>
                    <div className="card-footer text-muted">
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <h1>{id}</h1>
            </div>
        </div>
    </div>
    </Formik>
    </>
)
}
export default F_actualizar





