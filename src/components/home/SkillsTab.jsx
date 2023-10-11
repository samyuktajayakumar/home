import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}
// SkillsTab uses the length of skills list and slices it based on how many ever sections you want. - not a great way to do it imo, wcyd
function SkillsTab({ skills, isScrolled}) {
  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills[0].fields.slice(0, Math.floor(skills[0].fields.length / 2))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills[0].fields.slice(Math.floor(skills[0].fields.length / 2), skills[0].fields.length)}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
