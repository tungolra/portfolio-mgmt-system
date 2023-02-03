export function skillCards(str, obj) {
    return (
      <section className="skills">
        <h4>{str}</h4>
        <div className="skills-wrapper">
          {obj.map((skill, idx) => (
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
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }