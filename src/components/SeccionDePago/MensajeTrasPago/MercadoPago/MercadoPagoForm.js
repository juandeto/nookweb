import React from "react";

import classes from './MercadoPagoForm.module.css';

function MercadoPagoForm(props) {
  return (
    <form className={classes.MercadoPagoForm} action="https://www.my-site.com/process-payment" method="POST">
      <h4>Ingrese aquí para realizar su pago</h4>
      <button type="submit">Pagar</button>
      <script
        src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
        data-public-key="apikey publica"
        data-transaction-amount={props.precio}
      ></script>
    </form>
  );
}

export default MercadoPagoForm;
