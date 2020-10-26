import React, {Component} from 'react';


import * as actions from './../../../store/actions/index';
import Logo from './../../Ul/Logo/Logo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './MensajeTrasPago.module.css';


class SeccionDePago extends Component {
  componentWillUnmount(){
    this.props.onUnmountCarrito()
  }
  render() { 
    const mensajeTransferencia =<p className={classes.paragraph}><strong>Te hemos enviado a tu email los datos para realizar la transferencia</strong></p>;
    return ( 
       <div className={classes.MensajeTrasPago}>
              <span className={classes.logo}>
                <Logo />
              </span>
    {this.props.formaDePago === 'Transferencia Bancaria' ? mensajeTransferencia : null}
                
                <section className={classes.section}>
                <p className={classes.paragraph}>Te hemos enviado a tu email ({this.props.datosUsuario ? this.props.datosUsuario.orderData.email : null}) los datos de tu compra (caracteristicas, plazos, entrega, etc.).</p>

                <p className={classes.paragraph}>Pronto nos estaremos comunicando con vos al {this.props.datosUsuario ? this.props.datosUsuario.orderData.telefono : null}. Si tenes alguna duda <Link to="/contacto">no dudes en contactarnos</Link></p>
                </section>
            </div>
     );
  }
}
 

const mapStateToProps = (state) => {
    return {
      datosUsuario: state.carrito.order,
      formaDePago: state.carrito.formaDePago
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
      onUnmountCarrito: () => dispatch(actions.unmountCarrito())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SeccionDePago);
