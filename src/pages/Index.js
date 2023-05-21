import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = ({ pic }) => {
  const [picData, setPicData] = useState(null);

  useEffect(() => {
    // Fetch game data from Mongo
    fetch("http://localhost:4000/pic")
      .then((response) => response.json())
      .then((data) => setPicData(data))
      .catch((error) => console.log(error));
  }, []);
  // state to hold formData

  // loaded function
  const loaded = () => {
    console.log(pic);
    return picData.map((spic) => (
      <div key={spic._id} className="spic">
        <Link to={`/pic/${spic._id}`}>
          <h1 className="spic-title">{spic.title}</h1>
        </Link>
        <img src={spic.image} alt={spic.title} />
        <h3>{spic.description}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return <section>{picData ? loaded() : loading()}</section>;
};
export default Index;
