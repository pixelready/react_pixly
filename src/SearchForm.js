
import { useState } from "react";

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
    <form className="SearchForm" onSubmit={handleSubmission}>
      <label htmlFor="userSearchInput">Search: </label>
      <input
        id="userSearchInput"
        name="userSearchInput"
        value={formData}
        onChange={handleChange}
      ></input>
      <button className="SearchForm-btn">Search</button>
    </form>
  )
}

export default SearchForm;