const personal = {
  firstName: {
    fieldType: 'input',
    type: 'text',
    name: 'firstName',
    label: 'First name',
    required: true,
  },
  lastName: {
    fieldType: 'input',
    type: 'text',
    name: 'lastName',
    label: 'Last name',
    required: true,
  },
  email: {
    fieldType: 'input',
    type: 'email',
    name: 'email',
    label: 'E-mail',
    required: true,
  },
  phone: {
    fieldType: 'input',
    type: 'tel',
    name: 'phone',
    label: 'Phone',
    required: false,
  },
  linkedin: {
    fieldType: 'input',
    type: 'text',
    name: 'linkedin',
    label: 'LinkedIn',
    required: false,
  },
  nationality: {
    fieldType: 'input',
    type: 'text',
    name: 'nationality',
    label: 'Nationality',
    required: false,
  },
};

const work = {
  jobTitle: {
    fieldType: 'input',
    type: 'text',
    name: 'jobTitle',
    label: 'Job Title',
    required: true,
  },
  employer: {
    fieldType: 'input',
    type: 'text',
    name: 'employer',
    label: 'Employer',
    required: true,
  },
  cityTown: {
    fieldType: 'input',
    type: 'text',
    name: 'cityTown',
    label: 'City/Town',
    required: false,
  },
  startDate: {
    fieldType: 'input',
    type: 'month',
    name: 'startDate',
    label: 'Start Date',
    required: true,
  },
  endDate: {
    fieldType: 'input',
    type: 'month',
    name: 'endDate',
    label: 'End Date',
    required: true,
  },
  description: {
    fieldType: 'textarea',
    name: 'description',
    label: 'Description',
    required: false,
  },
};

const education = {
  degree: {
    fieldType: 'input',
    type: 'text',
    name: 'degree',
    label: 'Degree',
    required: true,
  },
  school: {
    fieldType: 'input',
    type: 'text',
    name: 'school',
    label: 'School',
    required: true,
  },
  cityTown: {
    fieldType: 'input',
    type: 'text',
    name: 'cityTown',
    label: 'City/Town',
    required: false,
  },
  startDate: {
    fieldType: 'input',
    type: 'month',
    name: 'startDate',
    label: 'Start Date',
    required: true,
  },
  endDate: {
    fieldType: 'input',
    type: 'month',
    name: 'endDate',
    label: 'End Date',
    required: true,
  },
  description: {
    fieldType: 'textarea',
    name: 'description',
    label: 'Description',
    required: false,
  },
};

const skill = {
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

const fieldDefinitions = { personal, work, education, skill };

export default fieldDefinitions;
