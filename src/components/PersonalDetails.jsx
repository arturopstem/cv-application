import { savePersonalDetails } from '../js/profileStorage';
import PersonalField from './PersonalField';

function PersonalDetails({ profile, setProfile }) {
  const hook = { profile, setProfile };
  const { personalDetails } = profile;

  const handleSubmit = (e) => {
    e.preventDefault();
    savePersonalDetails(personalDetails);
  };

  return (
    <section className="personal-details">
      <h2>Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <PersonalField field="firstName" {...hook} />
        <PersonalField field="lastName" {...hook} />
        <PersonalField field="emailAddress" {...hook} />
        <PersonalField field="phoneNumber" {...hook} />
        <PersonalField field="dateOfBirth" {...hook} />
        <PersonalField field="gender" {...hook} />
        <PersonalField field="nationality" {...hook} />
        <menu>
          <li>
            <button className="primary-button" type="submit">
              Save
            </button>
          </li>
        </menu>
      </form>
    </section>
  );
}

export default PersonalDetails;
