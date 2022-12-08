import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const Formulario_login = () => { const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
                    nombre: '',
					usuario: '',
					password: '',
					correo: ''
				}}
				validate={(valores) => {
					let errores = {};
                    
                    // Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras'
					}
					// Validacion usuario
					if(!valores.usuario){
						errores.usuario = 'Por favor ingresa un usuario'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.usuario)){
						errores.usuario = 'El usuario solo puede contener letras'
					}

					// Validacion password
					if(!valores.password){
						errores.password = 'Por favor ingresa tu password '
					} else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.password)){
						errores.password = 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.NO puede tener otros símbolos'
					}
                    // Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa tu correo '
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'ingrese un correo valido'
					}
                    

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
        <div className="container">
        <br></br>
            <div className="row">
                <div className="col-md-4">
                </div>
            <div className="col-md-4">                
                <div className="card">
                    <div className="card-header">
                        inicio de sesion
                    </div>
                    <div className="card-body">
                    <Form className="container">

                        <div className="mb-3">
							<label htmlFor="nombre" className="form-label">Nombre</label>
							<Field type="text" id="nombre" name="nombre" className="form-control" placeholder="John Doe" aria-describedby="helpId" />
							<ErrorMessage name="nombre" component={() => (<div className="alert alert-danger" role="alert">{errors.nombre}</div>)} />
						</div>

						<div className="mb-3">
							<label htmlFor="usuario" className="form-label">Usuario</label>
							<Field type="text" id="usuario" name="usuario" className="form-control" placeholder="John Doe" aria-describedby="helpId" />
							<ErrorMessage name="usuario" component={() => (<div className="alert alert-danger" role="alert">{errors.usuario}</div>)} />
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">Contraseña</label>
							<Field type="password" id="password" name="password" className="form-control" placeholder="password" aria-describedby="helpId" />
							<ErrorMessage name="password" component={() => (<div className="alert alert-danger" role="alert">{errors.password}</div>)} />
						</div>
						<div className="mb-3">
							<label htmlFor="correo" className="form-label">Correo</label>
							<Field type="email" id="correo" name="correo" className="form-control" placeholder="correo" aria-describedby="helpId" />
							<ErrorMessage name="correo" component={() => (<div className="alert alert-danger" role="alert">{errors.correo}</div>)} />
						</div>
						<button type="submit" id="registrar" className="btn btn-primary">Enviar</button>
						{formularioEnviado && <p className="alert alert-info" role="alert">Formulario enviado con exito!</p>}
					</Form>
                    </div>
                    <div className="card-footer text-muted">
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            </div>
        </div>
    </div>
					
				)}
				{}
			</Formik>
		</>
	);
}
export default Formulario_login





