import React from 'react'
import { Input } from 'antd';

const Search = Input.Search;

const InputSearch = ({ setInputValue }) => (
 <Search
    className="input-search"
    placeholder="input search text"
    onChange = { ({target: { value }}) => setInputValue(value) }
    style={{ width: 200 }}
  />
)

export default InputSearch;