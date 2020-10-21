import React from 'react';

import classes from './message.module.css';
import { Link } from 'react-router-dom';

function message() {
    return (
        <div className={classes.Message}>
            <p>¡El producto ya fue agregado a tu carrito!</p>
            <Link to="/"><button className={classes.seguirComprandoBtn}>Seguir comprando</button></Link>
            <Link to="carrito"><button className={classes.procederAlPagoBtn}>Ir al carrito</button></Link>
        </div>
    )
}

export default message;
