export interface ManifestationData {
  name: string;
  pronouns: 'she/her' | 'he/him' | 'they/them' | 'name';
  goal: string;
  details: string;
}

const STORAGE_KEY = 'manifestation_data';

export const saveManifestationData = (data: Partial<ManifestationData>): void => {
  try {
    const existing = getManifestationData();
    const updated = { ...existing, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving manifestation data:', error);
  }
};

export const getManifestationData = (): Partial<ManifestationData> => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error retrieving manifestation data:', error);
    return {};
  }
};

export const clearManifestationData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing manifestation data:', error);
  }
};
