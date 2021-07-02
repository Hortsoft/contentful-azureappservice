import React, { FunctionComponent } from 'react';
 
import filters from './tag-filters.module.scss';
type Props = {
  tags: { id: string; name: string }[];
  selectedTagId: string;
  updatePage: Function;
};

const TagFilters: FunctionComponent<Props> = ({
  tags,
  updatePage,
  selectedTagId
}) => {
  const handleTagChosen = (tag) => {
    updatePage(tag);
  };

  const renderTag = (tag, index) => (
    <div
      className={`global-tag ${filters.tag} ${
        selectedTagId === '' || selectedTagId === tag.id
          ? filters.tag__selected
          : ''
      }`}
      key={index}
      onClick={() => handleTagChosen(tag.id)}
    >
      {tag.name}
    </div>
  );

  return (
    <div className={filters.filters}>
      <h2 className={filters.filters__header}>Filter By Tags.</h2>
      <div className={filters.filters__tags}>
        <div
          className={`${filters.tag} ${
            selectedTagId === '' ? filters.tag__selected : 'global-tag'
          }`}
          onClick={() => handleTagChosen('')}
        >
          All
        </div>
        {tags.map(renderTag)}
      </div>
    </div>
  );
};

export default TagFilters;