import React from 'react';
import listOfSkills from './list-of-skills';
import classnames from 'classnames';
import './styles.scss';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSkill: listOfSkills[0]
    }
  }

  selectSkill = index => {
    return () => {
      this.setState({
        selectedSkill: listOfSkills[index]
      })
    }
  }

  render() {
    return (
      <div className="skills-container">
        <ul className="skills-list">
          {listOfSkills.map((skill, index) => (
            <li
              key={index}
              className={classnames('skill', {'skill-selected': skill.name === this.state.selectedSkill.name})}
              onClick={this.selectSkill(index)}
            >
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
        <section className="skill-details-container">
          <div className="skill-image-container">
            <img alt={this.state.selectedSkill.name} src={this.state.selectedSkill.img} />
          </div>
          <div className="skill-description skill">
            <span>{this.state.selectedSkill.description}</span>
          </div>
        </section>
      </div>
    )
  }
}

export default Skills;
