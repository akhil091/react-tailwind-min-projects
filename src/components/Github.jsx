/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData(); //useLoaderData is a React Router hook that allows you to access the data loaded by the route's loader. In this case, it's the data fetched from the githubInfoLoader function.

  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  const [repos, setRepos] = useState([]); 
  useEffect(() => {
    fetch(data.repos_url)
      .then((response) => response.json())
      .then((repoData) => {
        // Sort repositories by stargazers count (to get top repositories)
        const sortedRepos = repoData.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(sortedRepos);
      })
      .catch((error) => console.error('Error fetching repos:', error));
  }, [data.repos_url]); 

  return (
    <div className="bg-gray-900 text-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={data.avatar_url}
              alt="GitHub Avatar"
              className="w-32 h-32 rounded-full border-4 border-blue-500"
            />
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p className="text-sm text-gray-400">{data.bio}</p>
            <div className="flex space-x-6">
              <p className="text-lg">
                <span className="font-semibold">Followers:</span> {data.followers}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Public Repos:</span> {data.public_repos}
              </p>
            </div>
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View GitHub Profile
            </a>
          </div>
        </div>

        {/* Repositories Section */}
        <div className="mt-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Top Repositories</h2>
          <ul className="space-y-4">
            {repos.slice(0, 5).map((repo) => (
              <li
                key={repo.id}
                className="bg-gray-800 rounded-lg shadow-lg p-4 flex justify-between items-center hover:bg-gray-700 transition"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-400 hover:underline"
                >
                  {repo.name}
                </a>
                <span className="text-yellow-400 font-bold">
                  ⭐ {repo.stargazers_count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/akhil091");
  return response.json();
};