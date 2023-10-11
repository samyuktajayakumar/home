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

function SkillsCategory({ category}) {
    return (
        <p><b>{ category }</b></p>
    );
}

// Hardcoded since I'm assuming number of categories won't change
function HardSkillsTab({ skills, isScrolled}) {
  return (
    <>
      <Col>
         <SkillsCategory category={skills[0].category}/>
        <SkillsSection
          skills={skills[0].fields}
          isScrolled={isScrolled}
        />
      </Col>
        <Col>
            <SkillsCategory category={skills[1].category}/>
            <SkillsSection
                skills={skills[1].fields}
                isScrolled={isScrolled}
            />
        </Col>
        <Col>
            <SkillsCategory category={skills[2].category}/>
            <SkillsSection
                skills={skills[2].fields}
                isScrolled={isScrolled}
            />
        </Col>
        <Col>
            <SkillsCategory category={skills[3].category}/>
            <SkillsSection
                skills={skills[3].fields}
                isScrolled={isScrolled}
            />
        </Col>
        <Col>
            <SkillsCategory category={skills[4].category}/>
            <SkillsSection
                skills={skills[4].fields}
                isScrolled={isScrolled}
            />
        </Col>
    </>
  );
}

export default HardSkillsTab;
