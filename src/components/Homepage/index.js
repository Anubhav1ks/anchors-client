import React, { useEffect, useMemo, useState } from "react";
import "./home.scss";
import Header from "../layout/header";
import { handleApiRequest } from "../../functions/services";
const Homepage = () => {
  // Dummy data for the table
  const [Tabledata, setTabledata] = useState([]);
  const tableData = useMemo(() => Tabledata, [Tabledata]);
  const getUrls = async () => {
    handleApiRequest(
      "/user/getAllurl",
      {},
      (data) => {
        setTabledata(data.data);
      },
      "get"
    );
  };
  useEffect(() => {
    getUrls();
  }, []);

  // const redirecturl=()=>{

  // }

  return (
    <div>
      <Header />
      <main>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.title}</td>
                <td>
                  <a href={item.shortUrl} target="_blank" rel="noreferrer">
                    {" "}
                    {item.shortUrl}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Homepage;
