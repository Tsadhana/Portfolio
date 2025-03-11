import React from "react";

export const SkillCard = ({ title, skills }) => {
  return (
    <div className="card">
      <h2 className="font-[500] text-xl  mb-5">{title}</h2>
      <div className="card-body">
        {skills.map((skill) => {
          return (
            <div className="card-content" key={skill.name}>
              <img src={skill.image} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
