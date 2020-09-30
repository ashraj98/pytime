import React from 'react';
import AsyncCreatable from 'react-select/async-creatable';
import './index.scss';

const promiseOptions = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      { value: 'Tag1', label: 'Tag1' },
      { value: 'Tag2', label: 'Tag2' },
      { value: 'Tag3', label: 'Tag3' },
      { value: 'Tag4', label: 'Tag4' },
      { value: 'Tag5', label: 'Tag5' },
    ]);
  }, 1000);
});

interface SearchBarProps {
  onChange: (value: any) => void;
}

function SearchBar(props: SearchBarProps) {
  const { onChange } = props;
  return (
    <AsyncCreatable
      isMulti
      cacheOptions
      defaultOptions
      loadOptions={promiseOptions}
      onChange={onChange}
      components={{ DropdownIndicator: null }}
      placeholder="Tell us your game preferences..."
      classNamePrefix="searchBar"
    />
  );
}

export default SearchBar;
