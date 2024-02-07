import React, { useEffect, useMemo, useState } from "react";
import Header from "../layout/header";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../functions/Auth";
import ModalComponent from "./Modal";
import { handleApiRequest } from "../../functions/services";
import Nodatacomponent from "../Nodatacomponent";
import { Loader } from "../LoaderComponent";
const Dashboard = () => {
  const navigate = useNavigate();
  const [Tabledata, setTabledata] = useState([]);
  const [editdata, seteditdata] = useState(null);
  const [loading, setloading] = useState(false);
  const tableData = useMemo(() => Tabledata, [Tabledata]);
  useEffect(() => {
    if (!isAuth()) {
      navigate("/login");
    }
  }, [navigate]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const getUrls = async () => {
    setloading(true);
    handleApiRequest(
      "/user/getUserurl",
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

  const editfunction = (item) => {
    seteditdata(item);
    toggleModal();
  };

  const deletefunction = (item, index) => {
    const formData = {
      id: item._id,
    };
    handleApiRequest("/user/create/deleteurl", formData, (data) => {
      // toggleModal();
      setTabledata([
        ...tableData.slice(0, index),
        ...tableData.slice(index + 1),
      ]);
    });
  };
  return (
    <>
      <div>
        <Header isdashboard={true} />
        <div className="Addbutton">
          <button onClick={toggleModal}>Add Link</button>
        </div>
        <main>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>URL</th>
                <th>short URL</th>
                <th>Count</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  <Loader />
                </td>
              </tr>
            ) : (
              <>
              {tableData.length > 0 ? (
                <>
                  {tableData.map((item, i) => (
                    <tr key={item._id}>
                      <td>{i + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.origUrl}</td>
                      <td>{item.shortUrl}</td>
                      <td>{item.clicks}</td>
                      <td className="Tableaction">
                        {/* <button onClick={editfunction}>Edit</button> */}
                        <button onClick={() => editfunction(item)}>Edit</button>
                        <button onClick={() => deletefunction(item, i)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
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
      <ModalComponent
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        editdata={editdata}
        seteditdata={seteditdata}
        getUrls={getUrls}
      />
    </>
  );
};

export default Dashboard;
