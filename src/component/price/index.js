// PriceFormatter.js
import React from "react";

function PriceFormatter({ price }) {
  const formatToIDR = (price) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
  };

  return <span>{formatToIDR(price)}</span>;
}

export default PriceFormatter;
