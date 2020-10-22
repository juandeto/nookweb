import React, { useEffect } from "react";


function MercadoPagoForm(props) {
  useEffect(() => {
 
      const script = document.createElement("script");
      script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.async = true;
      // datapreferenceid='<%= global.id %>';
      const buttonMp=document.getElementsByClassName('butonMercadopago')[0];
      buttonMp.appendChild(script);
  }, [])
  return (
    <span 
    style={{margin: "5px auto"}}
    className="butonMercadopago"></span>
  );
}

export default MercadoPagoForm;
