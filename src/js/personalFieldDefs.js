const personalFieldDefinitions = {
  firstName: {
    fieldType: 'input',
    type: 'text',
    name: 'first-name',
    label: 'First name',
    required: true,
  },
  lastName: {
    fieldType: 'input',
    type: 'text',
    name: 'last-name',
    label: 'Last name',
    required: true,
  },
  emailAddress: {
    fieldType: 'input',
    type: 'email',
    name: 'email-address',
    label: 'Email address',
    required: true,
  },
  phoneNumber: {
    fieldType: 'input',
    type: 'tel',
    name: 'phone-number',
    label: 'Phone number',
    required: false,
  },
  dateOfBirth: {
    fieldType: 'input',
    type: 'date',
    name: 'date-of-birth',
    label: 'Date of birth',
    required: false,
  },
  nationality: {
    fieldType: 'input',
    type: 'text',
    name: 'nationality',
    label: 'Nationality',
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
};

export default personalFieldDefinitions;
