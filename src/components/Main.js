import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = (props) => {
  const [pic, setPic] = useState(null);
  //   const url = "https://peopleapp-8vpg.onrender.com/people/";
  const url = "http://localhost:4000/pic/";

  const getPic = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPic(data);
  };

  const createPic = async (spic) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(spic),
    });
  };

  const updatePic = async (spic, id) => {
    // make put request to create
    await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(spic),
    });
    // update list
    getPic();
  };

  const deletePeople = async (id) => {
    // make delete request to create people
    await fetch(url + id, {
      method: "DELETE",
    });
    // update list of people
    getPeople();
  };

  useEffect(() => getPeople(), []);

  return (
    <main>
      <Routes>
        <Route
          exact
          path="/"
          element={<Index people={people} createPeople={createPeople} />}
        />
        <Route
          path="/people/:id"
          element={
            <Show
              people={people}
              updatePeople={updatePeople}
              deletePeople={deletePeople}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
