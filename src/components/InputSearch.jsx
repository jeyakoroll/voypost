import React from 'react'
import { Input } from 'antd';

const Search = Input.Search;

class InputSearch extends React.Component {

  render () {
    const { setInputValue } = this.props

    return <Search
      className="input-search"
      placeholder="input search text"
      onChange = { ({target: { value }}) => setInputValue(value) }
      style={{ width: 200 }}
    />
  }
}

export default InputSearch;