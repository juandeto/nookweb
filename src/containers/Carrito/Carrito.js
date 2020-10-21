import React, { Component } from "react";

import * as actions from "./../../store/actions/index";
import classes from "./Carrito.module.css";
import { connect } from "react-redux";
import ContactData from "./ContactData/ContactData";
import CurrencyFormat from 'react-currency-format';

class Carrito extends Component {
  
  componentDidMount(){
    this.props.onGettingTotalPrice(this.props.basket)
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.basket !== nextProps.basket || this.props.price !==nextProps.price){
      return true
    }else{
      return false
    }
  }

  render() {
    const productCards = this.props.basket.map((product, i) => {
      return (
        <div key={i} className={classes.productCard}>
          <h3>respaldo: {product.modelo} / {product.genero}</h3>
          <CurrencyFormat 
                renderText={(value)=>{
                    return(
               <p>
            precio individual: <strong>{value}</strong>
          </p>
                        )
                }}
                decimalScale={2}
                value={product.precioParticular} //Homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                fixedDecimalScale={true}
            />
          
          <p>
            cantidad: <strong>{product.cantidad}</strong>
          </p>
          <span
            onClick={() =>
              this.props.onRemoveFromBasket(
                product.modelo,
                product.precioParticular
              )
            }
            className={classes.remover}
          >
            Remover
          </span>
        </div>
      );
    });

      return (
      <div className={classes.Carrito}>
        <h2>Tu Carrito</h2>
        <h4 className={classes.tusProductos}>Tus Productos</h4>
        <div className={classes.container}>{productCards}</div>
    <CurrencyFormat 
                renderText={(value)=>{
                    return(
                      <span className={classes.totalPrice}>Total: {value}</span>
                        )
                }}
                decimalScale={2}
                value={this.props.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        
        {this.props.basket.length === 0 ? (
          <p style={{ padding: "10px" }}>
            No tiene productos cargados en el carrito
          </p>
        ) : null}
         <ContactData />
        
      </div>
    );
    
}
   
  }


const mapStateToProps = (state) => {
  return {
    basket: state.carrito.basket,
    price: state.carrito.totalPrice,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromBasket: (modelo, precio) =>
      dispatch(actions.onRemoveFromBasket(modelo, precio)),
    onGettingTotalPrice: (basket) =>dispatch(actions.onGettingTotalPrice(basket))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carrito);
