import React from 'react';
import RepoListItem from './repo-list-item';

const RepoList = ({ repos, loading }) => {
  if (loading) {
    return 'Loading...';
  }

  if (!repos || repos.length === 0) {
    return <span>No repositories found.</span>;
  }

  return (
    <div>
      {repos.map((repo) => (
        <RepoListItem key={repo.id} repo={repo}></RepoListItem>
      ))}
    </div>
  );
};

export default RepoList;
