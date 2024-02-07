import React, { useEffect, useMemo, useState } from "react";
import "./home.scss";
import Header from "../layout/header";
import { handleApiRequest } from "../../functions/services";
import Nodatacomponent from "../Nodatacomponent";
import { Loader } from "../LoaderComponent";
const Homepage = () => {
  // Dummy data for the table
  const [Tabledata, setTabledata] = useState([]);
  const [loading, setloading] = useState(false);
  const tableData = useMemo(() => Tabledata, [Tabledata]);
  const getUrls = async () => {
    setloading(true);
    handleApiRequest(
      "/user/getAllurl",
      {},
      (data) => {
        setTabledata(data.data);
        setloading(false);
      },
      "get"
    );
  };
  useEffect(() => {
    getUrls();
  }, []);

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
            {loading ? (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  <Loader />
                </td>
              </tr>
            ) : (
              <>
                {tableData.length > 0 ? (
                  <>
                    {tableData.map((item, i) => (
                      <tr key={item.id}>
                        <td>{i + 1}</td>
                        <td>{item.title}</td>
                        <td>
                          <a
                            href={item.shortUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.shortUrl}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr>
                    <td colSpan="3" style={{ textAlign: "center" }}>
                      <Nodatacomponent />
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Homepage;
