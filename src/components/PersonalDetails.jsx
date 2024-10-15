import PersonalField from './PersonalField';

function PersonalDetails({ profile, setProfile }) {
  const hook = { profile, setProfile };

  return (
    <section className="personal-details">
      <h2>Personal Details</h2>
      <form>
        <PersonalField field="firstName" {...hook} />
        <PersonalField field="lastName" {...hook} />
        <PersonalField field="emailAddress" {...hook} />
        <PersonalField field="phoneNumber" {...hook} />
        <PersonalField field="dateOfBirth" {...hook} />
        <PersonalField field="gender" {...hook} />
        <PersonalField field="nationality" {...hook} />
      </form>
    </section>
  );
}

export default PersonalDetails;
