import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import Utils from "./utils";
import { Link } from "react-router-dom";
import axios from "axios"; 


function Dashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategorys, setTotalCategorys] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSellers, setTotalSellers] = useState(0);
  const [totalCustommers, setTotalCustommers] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/product`)
      .then((response) => {
        const data = response.data;
        const totalProducts = data.data.length;
        setTotalProducts(totalProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/category`)
      .then((response) => {
        const data = response.data;
        const totalCategorys = data.data.length;
        setTotalCategorys(totalCategorys);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/orders`)
      .then((response) => {
        const data = response.data;
        const totalOrders = data.data.length;
        setTotalOrders(totalOrders);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/seller`)
      .then((response) => {
        const data = response.data;
        const totalSellers = data.data.length;
        setTotalSellers(totalSellers);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/custommer`)
      .then((response) => {
        const data = response.data;
        const totalCustommers = data.data.length;
        setTotalCustommers(totalCustommers);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



  useEffect(() => {
    const DATA_COUNT = 12;
    const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
    const data = {
      labels: Utils.months({ count: DATA_COUNT }),
      datasets: [
        {
          label: "Custommer", 
          data: [totalCustommers], 
          fill: false,
          borderColor: Utils.CHART_COLORS.blue, 
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        },
        {
          label: "Seller", 
          data: [totalSellers], 
          fill: false,
          borderColor: Utils.CHART_COLORS.green, 
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
        },
      ],
    };
  
    const config = {
      type: "line",
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Total Data",
          },
        },
      },
    };

    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#D4D4D4",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="car"
        style={{
          width: "1270px",
          height: "300px",
          backgroundColor: "white",
          marginTop: "20px",
          marginBottom: "20px",
          marginRight: "20px",
          marginLeft: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <canvas id="myChart" width="1200" height="400"></canvas>
      </div>
      <div
        className="car"
        style={{
          width: "1270px",
          height: "300px",
          backgroundColor: "white",
          marginBottom: "20px",
          marginRight: "20px",
          marginLeft: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Productt */}
        <div
          className="product"
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#DB3022",
            margin: "20px",
            borderRadius: "10px",
          }}
        >
          <h6 style={{ color: "white", margin: 15 }}>Product</h6>
          <div
            className="wrap"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ color: "white" }}>{totalProducts}</h1>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className="bi bi-plus-lg"
                style={{
                  color: "white",
                  marginRight: 10,
                  fontSize: 20,
                  border: "5px solid white",
                  borderRadius: "50%",
                  backgroundColor: "#DB3022",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></i>
              <Link to={"/product"} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#DB3022",
                    borderRadius: "15px",
                    width: "80px",
                    border: "5px solid white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight:"bold"
                  }}
                >
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/*end Productt */}
        {/* category */}
        <div
          className="category"
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#1A2233",
            margin: "20px",
            borderRadius: "10px",
          }}
        >
          <h6 style={{ color: "white", margin: 15 }}>Category</h6>
          <div
            className="wrap"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ color: "white" }}>{totalCategorys}</h1>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className="bi bi-plus-lg"
                style={{
                  color: "#26334D",
                  marginRight: 10,
                  fontSize: 20,
                  border: "5px solid #26334D",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></i>
              <Link to={"/category"} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "#26334D",
                    color: "white",
                    borderRadius: "15px",
                    width: "80px",
                    border: "5px solid #26334D",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight:"bold"
                    
                  }}
                >
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* end category */}
        {/* transaction */}
        <div
          className="transaction"
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#8833FF",
            margin: "20px",
            borderRadius: "10px",
          }}
        >
          <h6 style={{ color: "white", margin: 15 }}>Transaction</h6>
          <div
            className="wrap"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ color: "white" }}>{totalOrders}</h1>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className="bi bi-plus-lg"
                style={{
                  color: "#7919FF",
                  marginRight: 10,
                  fontSize: 20,
                  border: "5px solid #7919FF",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></i>
              <Link to={"/transaction"} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "#7919FF",
                    color: "white",
                    borderRadius: "15px",
                    width: "80px",
                    border: "5px solid #7919FF",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight:"bold"
                    
                  }}
                >
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* end transaction */}
        {/* users */}
        <div
          className="users"
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#FF6633",
            margin: "20px",
            borderRadius: "10px",
          }}
        >
          <h6 style={{ color: "white", margin: 15 }}>Seller</h6>
          <div
            className="wrap"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ color: "white" }}>{totalSellers}</h1>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className="bi bi-plus-lg"
                style={{
                  color: "#E64B17",
                  marginRight: 10,
                  fontSize: 20,
                  border: "5px solid #E64B17",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></i>
              <Link to={"/users"} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "#E64B17",
                    color: "white",
                    borderRadius: "15px",
                    width: "80px",
                    border: "5px solid #E64B17",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight:"bold"
                    
                  }}
                >
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* end users */}
          {/* users */}
          <div
          className="users"
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#D85091",
            margin: "20px",
            borderRadius: "10px",
          }}
        >
          <h6 style={{ color: "white", margin: 15 }}>Custommer</h6>
          <div
            className="wrap"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ color: "white" }}>{totalCustommers}</h1>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className="bi bi-plus-lg"
                style={{
                  color: "#BA457D",
                  marginRight: 10,
                  fontSize: 20,
                  border: "5px solid #BA457D",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></i>
              <Link to={"/users"} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "#BA457D",
                    color: "white",
                    borderRadius: "15px",
                    width: "80px",
                    border: "5px solid #BA457D",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight:"bold"
                    
                  }}
                >
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* end users */}
      </div>
    </div>
  );
}

export default Dashboard;
