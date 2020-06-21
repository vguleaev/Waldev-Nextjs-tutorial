import React from 'react';
import TextInput from './shared/text-input';
import Select from './shared/select';
import LANGUAGES from '../constants/languages.constant';
import styles from './search.module.scss';

const Search = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props;

  const languages = [{ value: '', label: 'All' }, ...LANGUAGES];

  return (
    <div className={styles.search}>
      <TextInput
        className={styles.searchInput}
        label="Repo Search"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
      />
      <Select
        className={styles.languageSelect}
        label="Language"
        value={language}
        options={languages}
        onChange={(value) => onLanguageChange(value)}
      />
    </div>
  );
};

export default Search;
