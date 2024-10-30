import { readStoredProfile } from '../js/profileStorage';

function Template() {
  const storedProfile = readStoredProfile();
  const profile = storedProfile ?? {};

  return (
    <section className="template">
      <article></article>
    </section>
  );
}

export default Template;
