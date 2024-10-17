const personalFieldDefinitions = {
  firstName: {
    fieldType: 'input',
    type: 'text',
    id: 'first-name',
    label: 'First name',
    required: true,
  },
  lastName: {
    fieldType: 'input',
    type: 'text',
    id: 'last-name',
    label: 'Last name',
    required: true,
  },
  emailAddress: {
    fieldType: 'input',
    type: 'email',
    id: 'email-address',
    label: 'Email address',
    required: true,
  },
  phoneNumber: {
    fieldType: 'input',
    type: 'tel',
    id: 'phone-number',
    label: 'Phone number',
    required: false,
  },
  dateOfBirth: {
    fieldType: 'input',
    type: 'date',
    id: 'date-of-birth',
    label: 'Date of birth',
    required: false,
  },
  nationality: {
    fieldType: 'input',
    type: 'text',
    id: 'nationality',
    label: 'Nationality',
    required: false,
  },
  gender: {
    fieldType: 'select',
    id: 'gender',
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
