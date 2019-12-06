import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

const User = ({ match }) => {
  const username = match.params.login;
  const githubContext = useContext(GithubContext);
  const { getUser, user, repos, getUserRepos, loading } = githubContext;

  useEffect(() => {
    getUser(username);
    getUserRepos(username);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    location,
    avatar_url,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  if (loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt={name}
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong> {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company: </strong> {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Website: </strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-white">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default User;
