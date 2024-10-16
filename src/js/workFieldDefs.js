const workFieldDefinitions = {
  jobTitle: {
    fieldType: 'input',
    type: 'text',
    name: 'job-title',
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
    name: 'city-town',
    label: 'City/Town',
    required: false,
  },
  startDate: {
    fieldType: 'input',
    type: 'month',
    name: 'start-date',
    label: 'Start Date',
    required: false,
  },
  endDate: {
    fieldType: 'input',
    type: 'month',
    name: 'end-date',
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

export default workFieldDefinitions;
