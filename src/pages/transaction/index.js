import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import PriceFormatter from "../../component/price";

function Transaction() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/orders?search=${searchText}`)
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [searchText]);

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Status Orders",
      selector: "status_orders",
    },
    {
      name: "Photo Product",
      cell: (row) => (
        <img
          src={row.photo_product}
          alt="Product"
          style={{ width: "75px", height: "75px", margin: "5px" }}
        />
      ),
    },
    {
      name: "Product Name",
      selector: "product_name",
    },
    {
      name: "Order Size",
      selector: "order_size",
    },
    {
      name: "Order Color",
      selector: "order_color",
    },
    {
      name: "Quantity",
      selector: "quantity",
    },
    {
      name: "Customer ID",
      selector: "custommer_id",
    },
    {
      name: "Seller ID",
      selector: "seller_id",
    },
    {
      name: "Product ID",
      selector: "product_id",
    },
    {
      name: "Address ID",
      selector: "address_id",
    },
    {
      name: "Created At",
      selector: "created_at",
    },
    {
      name: "Price",
      selector: "price",
      cell: (row) => <PriceFormatter price={row.price} />,
    },
  ];
  

  if (loading) {
    return (
      
      <div
        className="card"
        style={{
          width: "1270px",
          height: "620px",
          backgroundColor: "white",
          margin:"20px"
        }}
      >
        {" "}
        <div
          className="table-container"
          style={{ overflowX: "auto", margin: "20px" }}
        >
          <h2>Transaction</h2>
          <div
            style={{
              borderBottom: "1px solid #000",
              paddingBottom: "10px",
              marginBottom: "10px",
              width: "100%",
            }}
          ></div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="container-fluid"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#D4D4D4",
        padding: 20,
      }}
    >
      <div
        className="card"
        style={{
          width: "1270px",
          height: "620px",
          backgroundColor: "white",
        }}
      >
        {" "}
        <div
          className="table-container"
          style={{ overflowX: "auto", margin: "20px" }}
        >
          <h2>Transaction</h2>
          <div
            style={{
              borderBottom: "1px solid #000",
              paddingBottom: "10px",
              marginBottom: "10px",
              width: "100%",
            }}
          ></div>

          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationPerPage={perPage}
            paginationRowsPerPageOptions={[4]}
            responsive
            onSearch={(value) => {
              setSearchText(value);
            }}
            subHeader
            subHeaderComponent={
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    width: 400,
                    borderRadius: 25,
                    paddingLeft: 30,
                  }}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />

                <i
                  className="bi bi-search iconSearch"
                  style={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Transaction;
