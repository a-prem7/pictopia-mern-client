import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Show = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pic = props.pic;
  console.log(id);

  const spic = pic ? pic.find((p) => p._id === id) : null;

  const [editForm, setEditForm] = useState(spic);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (spic) {
      setEditForm(spic);
    }
  }, [spic]);
  // handling form data change
  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  // handling submit event for edit form
  const handleUpdate = (e) => {
    e.preventDefault();
    props.updatePic(editForm, spic._id);
  };

  const handleEdit = () => {
    setIsEditing((prevState) => !prevState);
  };
  const handleDelete = () => {
    props.deletePic(spic._id);
    navigate("/");
  };

  const loaded = () => {
    return (
      <>
        <h1>{spic.title}</h1>
        <h2>{spic.description}</h2>
        <img className="avatar-image" src={spic.image} alt={spic.title} />
        <br></br>

        <button className="edit-btn" onClick={handleEdit}>
          {" "}
          {isEditing ? "Cancel Edit" : "Edit"}
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
        <br></br>

        <a href="/">
          <button className="back">Back</button>
        </a>
      </>
    );
  };
  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    <div className="spic">
      {spic ? loaded() : loading()}
      {isEditing && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={editForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image url"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.description}
            name="description"
            placeholder="description"
            onChange={handleChange}
          />
          <input type="submit" value="Update Post" />
          <br></br>
        </form>
      )}
    </div>
  );
};

export default Show;
