
import { useState } from "react";
import {Navbar, Form, Input, Label, Button} from "reactstrap";
import "./SearchForm.css";

/**
 *  Obtains user search queries and provides them to a parent for filtering
 *
 *  Props: addSearchCriteria
 *  State: formData (string)
 *
 */
function SearchForm({ addSearchCriteria }) {

  const [formData, setFormData] = useState("")

  function handleSubmission(evt) {
    evt.preventDefault();
    addSearchCriteria(formData);
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setFormData(previousData => value);
  }

  return (
    <Navbar light color="light">
      <Form className="SearchForm d-flex flex-fill py-3 px-5" onSubmit={handleSubmission}>
        <Input
          id="userSearchInput"
          name="userSearchInput"
          value={formData}
          onChange={handleChange}
          bsSize="sm"
          placeholder="search images by camera make"
          className="flex-grow-1"
        />
        <Button className="SearchForm-btn">Search</Button>
      </Form>
    </Navbar>
  )
}

export default SearchForm;