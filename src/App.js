import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button,Modal,Input } from 'react-bootstrap';

import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {


  const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [inputs, setInputs] =useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({values, [name]: value}));
       
    }
    const handleSubmit = (event) => {
      event.preventDefault();
  }
  const [contacts, setContacts] = useState(data);
  

  const [editFormData, setEditFormData] = useState({
    Actual_Name: "",
    short_name: "",
    Allow_Decimal: "",
    Base_Unit_id: "",
    unit_multiplier: "",
    based_unit: "",
  });

  const [addFormData, setAddFormData] = useState({
    Actual_Name: "",
    short_name: "",
    Allow_Decimal: "",
    Base_Unit_id: "",
    unit_multiplier: "",
    based_unit: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Actual_Name: addFormData.Actual_Name,
      short_name: addFormData.short_name,
      Allow_Decimal: addFormData.Allow_Decimal,
      Base_Unit_id: addFormData.Base_Unit_id,
      unit_multiplier: addFormData.unit_multiplier,
      based_unit: addFormData.based_unit,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
   
    const editedContact = {
      id: editContactId,
      Actual_Name: editFormData.Actual_Name,
      short_name: editFormData.short_name,
      Allow_Decimal: editFormData.Allow_Decimal,
      Base_Unit_id: editFormData.Base_Unit_id,
      unit_multiplier: editFormData.unit_multiplier,
      based_unit: editFormData.based_unit,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    
    const formValues = {
      Actual_Name: contact.Actual_Name,
      short_name: contact.short_name,
      Allow_Decimal: contact.Allow_Decimal,
      Base_Unit_id: contact.Base_Unit_id,
      unit_multiplier: contact.unit_multiplier,
      based_unit: contact.based_unit,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  


  return (
    <div className="app-container">
      
      <div className="top-right-sentence">
  <h3 style={{fontWeight: 'bold'}}>Welcome to Parallax Technologies</h3>
</div>


        <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "30px"}}>
          <img src="/img/parallax.png" alt="Parallax Technologies" style={{marginTop: "10px", display: "block", margin: "0 auto"}} />
        </div>


     
        <h2 style={{textAlign: 'right', fontWeight: 'bold'}}>Dashboard/Unit</h2>

        

<div className="d-flex justify-content-end">
        <Button variant="primary" onClick={handleShow} style={{ backgroundColor: '#a0e1f4', fontSize: '1.2rem', padding: '10px 35px',color: 'black' }}>
  Add Unit
</Button>

</div>

<div className="model_box">
  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Add Record</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form onSubmit={handleAddFormSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            Actual Name:
            <input
              type="text"
              name="Actual_Name"
              required="required"
              placeholder=""
              onChange={handleAddFormChange}
            />
          </label>
          <label>
            Short Name:
            <input
              type="text"
              name="short_name"
              required="required"
              placeholder=""
              onChange={handleAddFormChange}
            />
          </label>
          <label>
            Allow Decimal:
            <input
              type="text"
              name="Allow_Decimal"
              required="required"
              placeholder=""
              onChange={handleAddFormChange}
            />
          </label>
          <button type="submit" style={{ marginTop: '20px', backgroundColor: 'green' }}>Add Record</button>
        </div>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: '#d70e2d', fontSize: '1.2rem', padding: '10px 35px', color: 'black' }}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
</div>

       
        <form onSubmit={handleEditFormSubmit}>
          
        <table>
          <thead>
            <tr>
              <th>Actual_Name</th>
              <th>short_name</th>
              <th>Allow_Decimal</th>
              <th>Base_Unit_id</th>
              <th>Unit_multiplier</th>
              <th>Based_unit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      
    </div>
  );
};

export default App;

