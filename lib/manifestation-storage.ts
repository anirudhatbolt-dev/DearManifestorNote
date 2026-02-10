export interface ManifestationData {
  name?: string;
  pronouns?: string;
  goal?: string;
  details?: string;
  additionalManifestation?: string;
  More?: string;
  generatedMessage?: string;
  generatedImageUrl?: string;
  email?: string;
  phone?: string;
  country_code?: string;
  // First note
  firstNoteUrl?: string;
  firstNoteMessage?: string;
  firstNoteDate?: string;
  // Second note
  secondNoteUrl?: string;
  secondNoteMessage?: string;
  secondNoteDate?: string;
}

const STORAGE_KEY = "manifestation_data";

export function getManifestationData(): ManifestationData {
  if (typeof window === "undefined") return {};
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

export function saveManifestationData(data: Partial<ManifestationData>) {
  if (typeof window === "undefined") return;
  const existing = getManifestationData();
  const updated = { ...existing, ...data };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function saveGeneratedNote(message: string, imageUrl: string) {
  const data = getManifestationData();
  data.generatedMessage = message;
  data.generatedImageUrl = imageUrl;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Save first note with timestamp
export function saveFirstNote(message: string, imageUrl: string) {
  const data = getManifestationData();
  data.firstNoteUrl = imageUrl;
  data.firstNoteMessage = message;
  data.firstNoteDate = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Save second note with timestamp
export function saveSecondNote(message: string, imageUrl: string) {
  const data = getManifestationData();
  data.secondNoteUrl = imageUrl;
  data.secondNoteMessage = message;
  data.secondNoteDate = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function clearManifestationData() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}