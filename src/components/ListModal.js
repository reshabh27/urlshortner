import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { ListItems } from "./ListItems";



const baseURL = "http://localhost:9999/list/";


function Example() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   function to 
  const getData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        setData(res.data.urls);
        handleShow();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Button variant="primary" onClick={getData} style={{margin:' 10px auto'}}>
        GET ALL the data from database
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>All stored data in database</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Original URL</th>
                  <th>ShortCode</th>
                  <th>Number of time it Visited</th>
                  <th>Expires at</th>
                </tr>
              </thead>
              <tbody>
                {data.length
                  ? data.map((urls) => {
                      console.log(urls);
                      return <ListItems key={urls.id} urls={urls} />;
                    })
                  : "NO DATA Stored"}
              </tbody>
            </table>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
