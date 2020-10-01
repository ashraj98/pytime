import React from 'react';
import AsyncCreatable from 'react-select/async-creatable';
import './index.scss';
import { useDispatch } from 'react-redux';
import { RootActions } from '../../../store';
import { SuggestionService } from '../../../services';

const promiseOptions = (term: string) => new Promise((resolve) => {
  SuggestionService.search(term).then((res) => resolve(res.data)).catch(() => resolve([]));
});

function SearchBar() {
  const dispatch = useDispatch();
  const onChange = (terms: any[]) => dispatch(
    RootActions.UpdateSearchQuery((terms || []).map((t) => t.value)),
  );
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
