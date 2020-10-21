import React, { Component } from "react";

import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import classes from "./AdminLayout.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import DataRespaldo from "./../../components/Admin/DataRespaldo/DataRespaldo";
import DataCliente from "./../../components/Admin/DataCliente/DataCliente";
import Spinner from "./../../components/Ul/Spinner/Spinner";

class AdminLayout extends Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        "https://nookweb-5fb61.firebaseio.com/orders.json?auth=" +
          this.props.token
      )
      .then((response) => {
        let data;
        let arrayOrders = [...this.state.orders];
        for (data in response.data) {

          let obj = response.data[data];
          obj.id=data
          arrayOrders.push(obj);
        }
        this.setState({ orders: arrayOrders });
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  }



  render() {
    let clasesPago = [classes.nopagado];
    let clasesEntregado = [classes.noentregado];

    let orders = this.state.orders.map((order, i) => {
      if (order.pagado) {
        clasesPago.push(classes.pagado);
      }
      if (order.entregado) {
        clasesEntregado.push(classes.entregado);
      }
      let pagado = (
        <React.Fragment>
          <span className={clasesPago.join(" ")}>{order.pagado ? 'PAGADO' :'NO PAGADO'}</span>
          <span >{order.pagado ?'cambiar a NO PAGADO':'cambiar a PAGADO'}</span>
        </React.Fragment>
      );
      
      let entregado = (
        <label className={clasesEntregado.join(" ")}>
          {order.entregado ? "ENTREGADO" : "NO ENTREGADO"}
          <input type="checkbox"  />
        </label>
      );

      return (
        <details className={classes.orden} key={i}>
          <summary>
            <span className={classes.nombre} >{order.orderData.nombre}</span>
            <span className={classes.date}>{order.date}</span>
          </summary>
          <div className={classes.dataOrden}>
          <div className={classes.formaDePago}>Precio Final de la orden: ${order.price}</div>
            <div className={classes.pagosContainer}>{pagado}</div>
            <div className={classes.formaDePago}>Forma de pago: {order.formaDePago}</div>
            <div className={classes.formaDePago}>Forma de Envio: {order.formaDeEnvio}</div>
            {entregado}
            <DataRespaldo basket={order.basket} />
            <DataCliente cliente={order.orderData} />

          </div>
        </details>
      );
    });

    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <div className={classes.AdminLayout}>
        <h2 className={classes.title}>Admin</h2>
        <div className={classes.btns}>
        
        {this.props.token ? (
          <Link to="logout">
            <button className={classes.logoutBtn}>Logout</button>
          </Link>
        ) : null}
        </div>
        <div className={classes.orderContainer}>{orders}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, null)(withErrorHandler(AdminLayout, axios));
