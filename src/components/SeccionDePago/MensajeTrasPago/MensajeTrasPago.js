import React from 'react';

import Logo from './../../Ul/Logo/Logo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './MensajeTrasPago.module.css';
import MercadoPagoForm from './MercadoPago/MercadoPagoForm';

function SeccionDePago(props) {
    return (
            <div className={classes.MensajeTrasPago}>
              <span className={classes.logo}>
                <Logo />
              </span>
                <h3 className={classes.title}>¡Gracias por tu compra!</h3>
                <section className={classes.section}>
                <p className={classes.paragraph}>Te hemos enviado a tu email ({props.datosUsuario.length > 0 ? props.datosUsuario[0].orderData.email : null}) los datos de tu compra (caracteristicas, plazos, entrega, etc.).</p>
                {props.formaDePago === 'MercadoPago' ? <MercadoPagoForm precio={props.datosUsuario[0]?.orderData?.price}/> :null}
                <p className={classes.paragraph}>Pronto nos estaremos comunicando con vos al {props.datosUsuario.length > 0 ? props.datosUsuario[0].orderData.telefono : null}. Si tenes alguna duda <Link to="/contacto">no dudes en contactarnos</Link></p>
                </section>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
      datosUsuario: state.carrito.orders,
      formaDePago: state.carrito.formaDePago
    };
  };


export default connect(mapStateToProps, null)(SeccionDePago);
