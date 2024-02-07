import React, { useEffect, useState } from "react";
import styles from "./ModalComponent.module.scss"; // Import the SCSS module
import { handleApiRequest } from "../../functions/services";

const ModalComponent = ({
  isModalVisible,
  toggleModal,
  editdata,
  seteditdata,
  getUrls
}) => {
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const [id, setid] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editdata === null) {
      const formData = {
        title: name,
        url: url,
      };
      handleApiRequest("/user/create/addurl", formData, (data) => {
        toggleModal();
      });
    } else {
      const formData = {
        title: name,
        changeurl: url,
        id: id,
      };
      handleApiRequest("/user/create/editurl", formData, (data) => {
        toggleModal();
        getUrls()
      });
    }

    // Close the modal
    seteditdata(null);
    // toggleModal();
  };
  useEffect(() => {
    if (editdata) {
      setUrl(editdata.origUrl);
      setName(editdata.title);
      setid(editdata._id);
    } else {
      setUrl("");
      setName("");
      setid(null);
    }
  }, [editdata]);
  return (
    <>
      <div
        className={`${styles.modalContainer} ${
          isModalVisible ? "" : styles.hidden
        }`}
      >
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div
              className={styles.modalDialog}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className={styles.modalHeader}>
                <h2>{editdata === null ? "Add" : "Edit"} Link</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={styles.modalBody}>
                  <label className="font-medium text-gray-800">Name</label>
                  <input
                    type="text"
                    className={styles.inputField}
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="font-medium text-gray-800">Url</label>
                  <input
                    type="text"
                    className={styles.inputField}
                    value={url}
                    required
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <div className={styles.modalFooter}>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.cancelBtn}`}
                    onClick={() => {
                      toggleModal();
                      seteditdata(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`${styles.btn} ${styles.createBtn}`}
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
