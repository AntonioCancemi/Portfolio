import { Col, Image, Row } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Skills = () => {
  const iconsLinks = {
    dev: [
      {
        link: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
        name: "HTML5",
      },
      {
        link: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
        name: "CSS3",
      },
      {
        link: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
        name: "Bootstrap5",
      },
      {
        link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
        name: "SASS",
      },
      {
        link: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        name: "JavaScript",
      },
      {
        link: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        name: "TypeScript",
      },
      {
        link: "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp",
        name: "React",
      },
      {
        link: "https://cdn.worldvectorlogo.com/logos/redux.svg",
        name: "Redux",
      },
      {
        link: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
        name: "Java",
      },
      {
        link: "https://www.svgrepo.com/show/354380/spring-icon.svg",
        name: "SpringBoot",
      },
      {
        link: "https://cdn.icon-icons.com/icons2/2699/PNG/512/postgresql_src_logo_icon_170834.png",
        name: "PostgreSQL",
      },
    ],
    tool: [
      {
        link: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
        name: "VScode",
      },
      {
        link: "https://user-images.githubusercontent.com/11943860/46922529-b28cdc80-cfe0-11e8-9aec-0091161d3599.png",
        name: "Eclipse Enterprise",
      },
      {
        link: "https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png",
        name: "Postman ",
      },
      {
        link: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        name: "GitHub",
      },
      {
        link: "https://khaganat.net/wikhan/_media/fr:git_icon.png",
        name: "GitFlow",
      },
      {
        link: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png",
        name: "Stackoverflow ",
      },
    ],
  };
  return (
    <Row className="experience-contatiner justify-content-center">
      <Col className="col-10 col-sm-11">
        <h3 className="rounded-top">Development Skills</h3>
        <div className={` swing-in-top-fwd pt-2`}>
          <Row className="justify-content-center">
            {iconsLinks.dev.map((item) => (
              <ImgWithHover link={item.link} name={item.name} />
            ))}
          </Row>
          <p className="rounded-bottom">
            {iconsLinks.dev.map((item) => item.name + " | ")}
          </p>
        </div>
      </Col>
      <Col className="col-10 col-sm-11">
        <h3 className="rounded-top">Tool Skills</h3>
        <div className={` swing-in-top-fwd pt-2`}>
          <Row className="justify-content-center">
            {iconsLinks.tool.map((item) => (
              <ImgWithHover link={item.link} name={item.name} />
            ))}
          </Row>
          <p className="rounded-bottom">
            {iconsLinks.tool.map((item) => item.name + " | ")}
          </p>
        </div>
      </Col>
    </Row>
  );
};
export default Skills;

function ImgWithHover({ link, name }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {name}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 200, hide: 250 }}
      overlay={renderTooltip}
    >
      <Image className="icon" rounded src={link} width={30} />
    </OverlayTrigger>
  );
}
