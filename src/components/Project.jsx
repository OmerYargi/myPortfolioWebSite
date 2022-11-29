import React, { useEffect, useState } from "react";

const Project = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="project">
      <div className="project-content">
        {!filter && <h2>Welcome</h2>}
        {!filter && (
          <p>
            My name is Ömer Faruk Yargı. I am junior front-end developer. I am living in Turkey for now. I have developed and continue to develop many types of projects.
            <br /><br />
            I have experience on HTML5, CSS3, Sass, Less Css, JavasSript and ReactJs
          </p>
        )}
        {!filter && (
          <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/1YXyMSqxAw_DZqV7784AFTXIHdUidYMbg/view?usp=sharing"
            target={"_blank"}
          >View My CV</a>
        )}
        {filter && <h2>{filter.name}</h2>}
        {filter && <p>{filter.content}</p>}
        <div className="project-content-links">
          {filter && filter.github && (
            <a rel="noreferrer" href={filter.github} target="_blank">
              Github
            </a>
          )}
          {filter && filter.webSite && (
            <a rel="noreferrer" href={filter.webSite} target="_blank">
              ViewSite
            </a>
          )}
        </div>
      </div>
      <div className="project-menu">
        <h3>Projects</h3>
        <div className="project-menu-border"></div>
        <div className="project-menu-filter">
          <p onClick={() => setFilter(null)}>Welcome</p>
          {data &&
            data.map((item) => (
              <p key={item.id} onClick={() => setFilter(item)}>
                {item.name}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
