import React, { useState } from "react";
import axios from "axios";

export default function NewSkillForm({user}) {
  const [formData, setFormData] = useState({
    type: "",
    subtype: "",
    skill: "",
    img: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post(`/api/skills/${user._id}`, formData);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="subtype">Subtype:</label>
        <input
          type="text"
          name="subtype"
          value={formData.subtype}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="skill">Skill:</label>
        <input
          type="text"
          name="skill"
          value={formData.skill}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="img">Image URL:</label>
        <input
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
