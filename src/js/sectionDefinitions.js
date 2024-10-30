const personal = {
  name: 'personal',
  title: 'Personal Details',
  isMultiEntry: false,
  isEditable: true,
};

const work = {
  name: 'work',
  title: 'Work Experience',
  isMultiEntry: true,
  isEditable: true,
};

const education = {
  name: 'education',
  title: 'Education',
  isMultiEntry: true,
  isEditable: true,
};

const skill = {
  name: 'skill',
  title: 'Skills',
  isMultiEntry: true,
  isEditable: true,
};

const template = {
  name: 'template',
  title: 'Template',
  isEditable: false,
};

const sectionDefinitions = [personal, work, education, skill, template];

export default sectionDefinitions;
