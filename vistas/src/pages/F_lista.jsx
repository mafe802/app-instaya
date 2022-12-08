
const paquetes=[
    {
        servicio:"1",
        fecha:"17/02/1999",
        ciuda_e:"maicao",
        direccion:"calle 4a",
        estado:"activo"
    },
    {
        servicio:"2",
        fecha:"17/02/2009",
        ciuda_e:"rioacha",
        direccion:"calle 4b",
        estado:"inactivo"
    },
    {
        servicio:"3",
        fecha:"17/02/2000",
        ciuda_e:"manaure",
        direccion:"calle 3a",
        estado:"activo"
    }
]


const F_lista = () => {
    return (
    <>
        <table className="table table-light">
        <thead className="thead-light">
            <tr>
                <th>SERVICIO</th>
                <th>FECHA</th>
                <th>CIUDAD DE ENTREGA</th>
                <th>DIRECCION ENTREGA</th>
                <th>ESTADO</th>
                <th>ACCIONES</th>
            </tr>
        </thead>
        <tbody>
        {paquetes.map((envio,index)=>{

            return( <tr key={index}>
                <td>{envio.servicio}</td>
                <td>{envio.fecha}</td>
                <td>{envio.ciuda_e}</td>
                <td>{envio.direccion}</td>
                <td>{envio.estado}</td>
                <td><a href={"/actualizar/"+index} className="btn btn-danger">eliminar </a>||<a href={"/actualizar/"+index} className="btn btn-success">actualizar</a></td>
            </tr>      )
        }
        )}
                 
        </tbody>
    </table>
    </>
)
}
export default F_lista





