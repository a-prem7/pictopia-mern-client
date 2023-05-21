import { useState } from "react";
const Create = (props) => {
  const [newForm, setNewForm] = useState({
    title: "",
    image: "",
    description: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPic(newForm);
    setNewForm({
      title: "",
      image: "",
      description: "",
    });
  };
  return (
    <section>
      <form className="createform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Create Post" />
      </form>
    </section>
  );
};

export default Create;
