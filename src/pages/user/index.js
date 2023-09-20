import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function User() {
  const [data, setData] = useState([]);
  const [dataSeller, setDataSeller] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchCustommer, setSearchCustommer] = useState("");
  const [searchSeller, setSearchSeller] = useState("");
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_KEY}/custommer?search=${searchCustommer}`
      )
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [searchCustommer]);

  const columnsCustommer = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
    },
    {
      name: "Email",
      selector: "email",
    },
    {
      name: "Phone",
      selector: "phone",
    },
    {
      name: "Photo",
      cell: (row) => (
        <img
          src={row.photo}
          alt="Customer"
          style={{ width: "75px", height: "75px", margin: "5px" }}
        />
      ),
    },
    {
      name: "Role",
      selector: "role",
    },
  ];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/seller?search=${searchSeller}`)
      .then((response) => {
        setDataSeller(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [searchSeller]);

  const columnsSeller = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
    },
    {
      name: "Email",
      selector: "email",
    },
    {
      name: "Phone",
      selector: "phone",
    },
    {
      name: "Store Name",
      selector: "store_name",
    },
    {
      name: "Photo",
      cell: (row) => (
        <img
          src={row.photo}
          alt="Customer"
          style={{ width: "75px", height: "75px", margin: "5px" }}
        />
      ),
    },
    {
      name: "Role",
      selector: "role",
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
          margin: "20px",
        }}
      >
        {" "}
        <div
          className="table-container"
          style={{ overflowX: "auto", margin: "20px" }}
        >
          <h2>User Data</h2>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Custommer" title="Custommer"></Tab>
            <Tab eventKey="Seller" title="Seller"></Tab>
          </Tabs>
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
          <h2>User Data</h2>
          <Tabs
            defaultActiveKey="Custommer"
            id="uncontrolled-tab-example"
            // className="tab"
          >
            <Tab
              eventKey="Custommer"
              title="Custommer"
              style={{ backgroundColor: "white" }}
            >
              <DataTable
                columns={columnsCustommer}
                data={data}
                pagination
                paginationPerPage={perPage}
                paginationRowsPerPageOptions={[4]}
                responsive
                onSearch={(value) => {
                  setSearchCustommer(value);
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
                      value={searchCustommer}
                      onChange={(e) => setSearchCustommer(e.target.value)}
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
            </Tab>
            <Tab
              eventKey="Seller"
              title="Seller"
              style={{ backgroundColor: "white" }}
            >
              <DataTable
                columns={columnsSeller}
                data={dataSeller}
                pagination
                paginationPerPage={perPage}
                paginationRowsPerPageOptions={[4]}
                responsive
                onSearch={(value) => {
                  setSearchSeller(value);
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
                      value={searchSeller}
                      onChange={(e) => setSearchSeller(e.target.value)}
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
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default User;
