import React from 'react';
import TextInput from './shared/text-input';
import Select from './shared/select';
import LANGUAGES from '../constants/languages.constant';

const Search = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props;

  const languages = [{ value: '', label: 'All' }, ...LANGUAGES];

  return (
    <div>
      <TextInput
        label="Repo Search"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
      />
      <Select
        label="Language"
        value={language}
        options={languages}
        onChange={(value) => onLanguageChange(value)}
      />
    </div>
  );
};

export default Search;
