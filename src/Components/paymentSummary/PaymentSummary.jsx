import React from "react";
import "./paymentSummary.css";

const PaymentSummary = ({ title, total, color }) => {
  return (
    <div className="payment-summary">
      <p className="payment-summary__title" style={color ? { color } : {}}>
        {title}
      </p>
      <p className="payment-summary__total">{total}</p>
    </div>
  );
};

export default PaymentSummary;
