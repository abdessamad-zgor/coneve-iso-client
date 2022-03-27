import React from 'react';
import { useForm } from 'react-hook-form';

function FilterBar() {
  const { register, handleSubmit } = useForm();
  return (
    <form className="filter-bar-root">
      <h2>Filter By</h2>
      <div className="form-row">
        <label htmlFor="" className="form-label">
          Title
        </label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="" className="form-label">
          Category
        </label>
        <select name="" id="" className="form-select">
          <option value=""></option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="" className="form-label">
          Price
        </label>
        <input type="range" name="" id="" />
      </div>
      <div className="form-row">
        <label htmlFor="" className="form-label">
          Attributes
        </label>
        <input type="checkbox" name="" id="" />
      </div>
      <div className="form-submit">
        <input type="submit" value="" />
      </div>
    </form>
  );
}

export default FilterBar;
