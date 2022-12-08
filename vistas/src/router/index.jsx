import {createBrowserRouter} from 'react-router-dom'
import Login from '../pages/login';
import Register from '../pages/Register';
import Registrar_paquete from '../pages/Registrar_paquete';
import Lista from '../pages/Lista';
import Actualizar from '../pages/Actualizar';

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/registrar_paquete',
        element:<Registrar_paquete/>
    },
    {
        path:'/lista',
        element:<Lista/>
    },
    {
        path:'/actualizar/:id',
        element:<Actualizar/>
    }
]);