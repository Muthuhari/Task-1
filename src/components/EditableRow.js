import React from "react";


const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
  }) => {
    return (
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Actual_Name.."
            name="Actual_Name"
            value={editFormData.Actual_Name}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="short_name.."
            name="short_name"
            value={editFormData.short_name}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Allow_Decimal.."
            name="Allow_Decimal"
            value={editFormData.Allow_Decimal}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
          
            placeholder="Base_Unit_id.."
            name="Base_Unit_id"
            value={editFormData.Base_Unit_id}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
        
            placeholder="unit_multiplier.."
            name="unit_multiplier"
            value={editFormData.unit_multiplier}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
           
            placeholder="based_unit.."
            name="based_unit"
            value={editFormData.based_unit}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
    );
  };
  
  export default EditableRow;