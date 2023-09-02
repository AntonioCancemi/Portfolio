import { Col, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <Row className="experience-contatiner">
      <Col>
        <h3 className="rounded-top">Development Skills</h3>
        <div className={` swing-in-top-fwd pt-2`}>
          <img
            src="https://skillicons.dev/icons?i=html,css,bootstrap,sass,js,ts,react,redux,java,postgresql,spring&perline=6"
            alt="Icone delle tue skill"
          />
          <p>
            html5, css3, bootstrap5, sass, js, ts, react, redux, javaEE,
            postgresql, springBoot4
          </p>
        </div>
      </Col>
      <Col>
        <h3 className="rounded-top">Tool Skills</h3>
        <div className={` swing-in-top-fwd pt-2`}>
          <img
            src="https://skillicons.dev/icons?i=discord,postman,eclipse,git,github,stackoverflow,vscode&perline=6"
            alt="Icone delle tue skill"
          />
          <p>discord, postman, eclipse, git, github, stackoverflow, vscode</p>
        </div>
      </Col>
    </Row>
  );
};
export default Skills;
