import React from "react";


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
      <tr>
        <td>{contact.Actual_Name}</td>
        <td>{contact.short_name}</td>
        <td>{contact.Allow_Decimal}</td>
        <td>{contact.Base_Unit_id}</td>
        <td>{contact.unit_multiplier}</td>
        <td>{contact.based_unit}</td>
        <td>
        <button
          type="button" onClick={(event) => handleEditClick(event, contact)} style={{backgroundColor: 'green', padding: '6px', borderRadius: '8px'}}>
          Edit
          </button>
          <button type="button" onClick={() => {
  if (window.confirm('Are you sure you want to delete this contact?')) {
    handleDeleteClick(contact.id);
  }
}} style={{backgroundColor: 'red', padding: '6px', borderRadius: '8px'}}>
  Delete
</button>

  
  
        </td>
      </tr>
    );
  };
  
  export default ReadOnlyRow;
