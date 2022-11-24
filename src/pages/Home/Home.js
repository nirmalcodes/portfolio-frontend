import React, { useEffect, useState } from "react";
import { Header, Works } from "../../container";
import { client } from "../../client";

const Home = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works" && hidden == false]';

    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);

  // console.log(works);

  return (
    <>
      <Header />
      <Works workData={works} />
    </>
  );
};

export default Home;
