import React from 'react';
import './SendOrder.css';

const SendOrder = (props) => {

	return <button className="send-order" onClick={() => props.submitOrder(props.order, props.notes)}>ENVIAR COMANDA</button>

}

export default SendOrder;