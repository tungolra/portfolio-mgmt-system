import React, { useState } from "react";
import axios from "axios";

export default function NewProjectForm({user}) {
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    pages: [],
    summary: "",
    responsibilities: [],
    repo: "",
    site: "",
    skills: [],
    type: "project",
  });
console.log(formData)
  const handleChange =  (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const res = await axios.post(`/api/projects/${user._id}`, formData);
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="img">Image URL:</label>
        <input
          type="text"
          id="img"
          name="img"
          value={formData.img}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="pages">Page URLs:</label>
        <input
          type="text"
          id="pages"
          name="pages"
          value={formData.pages}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="responsibilities">Responsibilities:</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="repo">Repository URL:</label>
        <input
          type="text"
          id="repo"
          name="repo"
          value={formData.repo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="site">Site URL:</label>
        <input
          type="text"
          id="site"
          name="site"
          value={formData.site}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="skills">Skills:</label>
        <input
          type="text"
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
