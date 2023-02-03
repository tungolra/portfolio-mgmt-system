import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Skills.css";
import * as seed from "../../seed.js";
import { Modal, useMantineTheme } from "@mantine/core";
import { skillCards } from "../../library/skillCard";

function AddSkillModal(props) {
  const [newSkill, setNewSkill] = useState({
    type: "",
    subtype: "",
    skill: "",
    img: "",
  });
  const theme = useMantineTheme();

  function handleChange(e) {
    setNewSkill({ ...newSkill, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    try {
    } catch (error) {}
    props.setModalOpened(false);
  }

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={props.modalOpened}
      onClose={() => props.setModalOpened(false)}
    >
      <form onSubmit={handleSubmit}>
        <input type="text" name="type" onChange={handleChange} />
        <input type="text" name="subtype" onChange={handleChange} />
        <input type="text" name="skill" onChange={handleChange} />
        <input type="text" name="img" onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
}

export default function Skills({ user }) {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="skills-container">
      <h3 id="skills"> Project Applications </h3>
      {!user ? null : <button> + Add Skill </button>}
      <AddSkillModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
      <div className="skill-sections">
        {skillCards("Languages", seed.languages)}
        {skillCards("Technologies", seed.technologies)}
      </div>
    </div>
  );
}
