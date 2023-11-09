import React from "react";
import { useFilterContext } from "../context/filter_Context";

export default function Sort() {
  const { sort, updateSort } = useFilterContext();
  return (
    <div className='row justify-content-end'>
      <div className='col-6 col-lg-3'>
        <form>
          <select
            name='sort'
            id='sort'
            value={sort}
            onChange={updateSort}
            className='form-select form-select-sm'
            aria-label='.form-select-sm example'>
            <option value='price-lowest'>Price (Lowest)</option>
            <option value='price-highest'>Price (highest)</option>
            <option value='name-a'>Name (a-z)</option>
            <option value='name-z'>Name (z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
}
