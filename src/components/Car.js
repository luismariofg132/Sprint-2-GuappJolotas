import React from 'react';
import { Link } from 'react-router-dom';
import { BotonPagar, DivProducto, SpanNombre, SpanPrecio } from '../styles/Car';

const Car = () => {
    const productos = JSON.parse(localStorage.getItem('productCar')) || []

    const pagar = () => {
        localStorage.removeItem('productCar')
        window.location.href = "/"
    }

    return <div>
        <header className='headerCar'>
            <Link to="/" className='headerCarLink'>Volver
                <span>Carrito de compras</span>
            </Link>
        </header>
        <section>
            {
                productos.map(prod => (
                    <>
                        <DivProducto>
                            <img src={prod.imagen} alt='producto' />
                            <SpanNombre>{prod.nombre}</SpanNombre>
                            <SpanPrecio>$ {prod.precio} MXN</SpanPrecio>
                        </DivProducto>
                    </>
                ))
            }
            <DivProducto>
                <BotonPagar onClick={() => pagar()}>Pagar</BotonPagar>
            </DivProducto>
        </section>
    </div>;
};

export default Car;
