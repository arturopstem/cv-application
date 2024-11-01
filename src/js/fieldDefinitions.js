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
  emailAddress: {
    fieldType: 'input',
    type: 'email',
    name: 'emailAddress',
    label: 'Email address',
    required: true,
  },
  phoneNumber: {
    fieldType: 'input',
    type: 'tel',
    name: 'phoneNumber',
    label: 'Phone number',
    required: false,
  },
  dateOfBirth: {
    fieldType: 'input',
    type: 'date',
    name: 'dateOfBirth',
    label: 'Date of birth',
    required: false,
  },
  gender: {
    fieldType: 'select',
    name: 'gender',
    label: 'Gender',
    required: false,
    options: [
      { value: '', text: '-- Select --' },
      { value: 'male', text: 'Male' },
      { value: 'female', text: 'Female' },
    ],
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
    required: false,
  },
  endDate: {
    fieldType: 'input',
    type: 'month',
    name: 'endDate',
    label: 'End Date',
    required: false,
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
    required: false,
  },
  endDate: {
    fieldType: 'input',
    type: 'month',
    name: 'endDate',
    label: 'End Date',
    required: false,
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
