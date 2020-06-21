import React from 'react';
import Link from 'next/link';
import styles from './repo-list-item.module.scss';

const RepoListItem = ({ repo }) => {
  const cutDescription = (description) => {
    if (description.length > 100) {
      return description.slice(0, 100) + '...';
    }

    return description;
  };

  return (
    <div className={`${styles.repoListItem} box`}>
      <div className={styles.repoName}>
        <Link href="/repo/[id]" as={`/repo/${repo.id}`}>
          <a>{repo.name}</a>
        </Link>
      </div>

      <p className={styles.className}>{cutDescription(repo.description)}</p>

      <div className={styles.footer}>
        <div className={styles.counters}>
          <div className={styles.counter}>
            <span>{repo.stargazers_count}</span>
          </div>
          <div className={styles.counter}>
            <span>{repo.forks_count}</span>
          </div>
        </div>
        <div className={styles.language}>
          <spa>{repo.language}</spa>
        </div>
      </div>
    </div>
  );
};

export default RepoListItem;
