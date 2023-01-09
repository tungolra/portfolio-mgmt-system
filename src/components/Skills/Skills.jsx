import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Skills.css";
import * as seeds from "../../seed.js";
import { Modal, useMantineTheme } from "@mantine/core";

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
        <section className="skills">
          <h4>Languages</h4>
          <div className="skills-wrapper">
            {seeds.languages.map((skill, idx) => (
              <div key={idx} className="skill-item-container">
                <div className="skill-item">
                  <img
                    className="tech-icons"
                    src={skill?.img}
                    alt={skill.skill}
                  />
                </div>
                <div className="skill-item-details">
                  <div>
                    <strong>{skill?.skill}</strong>
                  </div>
                  <div className="skill-subtype">#{skill?.subtype}</div>
                  {/* <div className="skill-count-container">
                <label>Times Used</label>
                <div className="skill-count">x</div>
              </div> */}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="skills">
          <h4>Technologies</h4>
          <div className="skills-wrapper">
            {seeds.technologies.map((skill, idx) => (
              <div key={idx} className="skill-item-container">
                <div className="skill-item">
                  <img
                    className="tech-icons"
                    src={skill?.img}
                    alt={skill.skill}
                  />
                </div>
                <div className="skill-item-details">
                  <div>
                    <strong>{skill?.skill}</strong>
                  </div>
                  <div className="skill-subtype">#{skill?.subtype}</div>
                  {/* <div className="skill-count-container">
                <div className="skill-count">Times Used: x</div>
              </div>
                <Link className="link-to-all-work" to="/all-work">
                  See Projects/Labs
                </Link> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
