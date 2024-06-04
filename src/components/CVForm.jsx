import INPUT_ATTR from '../utils/input-attributes';
import GeneralField from './GeneralField';

function Form({ generalInfo, setGeneralInfo }) {
  const fields = Object.keys(generalInfo);

  return (
    <article>
      <section>
        <header>
          <h2>General Information</h2>
        </header>
        {fields.map((field) => (
          <GeneralField
            key={field}
            {...INPUT_ATTR[field]}
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
        ))}
      </section>
      <section>
        <header>
          <h2>Educational Experience</h2>
        </header>
        <ul></ul>
        <button>Add More</button>
      </section>
      <section>
        <header>
          <h2>Practical Experience</h2>
        </header>
        <ul></ul>
        <button>Add More</button>
      </section>
    </article>
  );
}

export default Form;
