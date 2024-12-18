import { v4 as uuidv4 } from 'uuid';

import sectionDefinitions from './sectionDefinitions';

export function readStoredProfile() {
  const storedProfile = localStorage.getItem('profile');

  if (storedProfile != null) {
    return JSON.parse(storedProfile);
  }

  return storedProfile;
}

export function getInitialProfile() {
  const storedProfile = readStoredProfile();
  const initialProfile = storedProfile ?? {};
  const sections = sectionDefinitions.filter((def) => def.isEditable);

  sections.forEach((section) => {
    initialProfile[section.name] ??= [{ id: uuidv4() }];
  });

  return initialProfile;
}

function filterOutEmptyValues(obj) {
  const nextObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value.trim()) {
      nextObj[key] = value;
    }
  }

  return nextObj;
}

function findEntryIndex(entries, id) {
  return entries.findIndex((entry) => entry.id === id);
}

export function saveEntry(entriesArrayName, entry) {
  const storedProfile = readStoredProfile();
  const profile = storedProfile ?? {};
  profile[entriesArrayName] ??= [];

  const entriesArray = profile[entriesArrayName];
  const entryIndex = findEntryIndex(entriesArray, entry.id);
  const nextEntry = filterOutEmptyValues(entry);

  if (entryIndex >= 0) {
    entriesArray[entryIndex] = nextEntry;
  } else {
    entriesArray.push(nextEntry);
  }

  localStorage.setItem('profile', JSON.stringify(profile));
}

export function deleteEntry(entriesArrayName, entry) {
  const storedProfile = readStoredProfile();
  const profile = storedProfile ?? {};

  if (entriesArrayName in profile) {
    const entriesArray = profile[entriesArrayName];
    const entryIndex = findEntryIndex(entriesArray, entry.id);

    if (entryIndex >= 0) {
      entriesArray.splice(entryIndex, 1);
    }

    if (entriesArray.length === 0) {
      delete profile[entriesArrayName];
    }

    localStorage.setItem('profile', JSON.stringify(profile));
  }
}
