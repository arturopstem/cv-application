const skillFieldDefinitions = {
  skill: {
    fieldType: 'input',
    type: 'text',
    name: 'skill',
    label: 'Skill',
    required: true,
  },
  level: {
    fieldType: 'select',
    name: 'level',
    label: 'Level',
    required: true,
    options: [
      { value: '', text: '-- Select level --' },
      { value: 'expert', text: 'Expert' },
      { value: 'experienced', text: 'Experienced' },
      { value: 'skillful', text: 'Skillful' },
      { value: 'intermediate', text: 'Intermediate' },
      { value: 'beginner', text: 'Beginner' },
    ],
  },
};

export default skillFieldDefinitions;
