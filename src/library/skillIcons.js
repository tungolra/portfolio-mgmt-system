export function skillIcons(obj) {
  return (
    <div className="skills-item">
      {obj.map((skill, idx) => (
        <img className="tech-icons" src={skill.img} alt={skill.skill} />
      ))}
    </div>
  );
}
