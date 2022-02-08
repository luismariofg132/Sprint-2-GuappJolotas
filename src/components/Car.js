import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BotonPagar, DivProducto, SpanNombre, SpanPrecio } from '../styles/Car';

const Car = () => {

    // Arrglo de objetos de los productos en el localStorage
    const productos = JSON.parse(localStorage.getItem('productCar')) || []

    const navigate = useNavigate()

    // Funcion cuando se da click en pagar este vacia el localStorage y lo redirecciona al inicio
    const pagar = () => {
        localStorage.removeItem('productCar')
        navigate('/principal')
    }

    return <div>
        <header className='headerCar'>
            <Link to="/" className='headerCarLink'>Volver
                <span>Carrito de compras</span>
            </Link>
        </header>
        <section>
            {
                productos.map((prod, index) => (
                    <DivProducto key={index}>
                        <img src={prod.imagen} alt='producto' />
                        <SpanNombre>{prod.nombre}</SpanNombre>
                        <SpanPrecio>$ {prod.precio} MXN</SpanPrecio>
                    </DivProducto>
                ))
            }
            <DivProducto>
                <BotonPagar onClick={() => pagar()}>Pagar</BotonPagar>
            </DivProducto>
        </section>
    </div>;
};

export default Car;
