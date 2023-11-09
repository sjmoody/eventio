export const getUploadthingUrl = (fileKey?: string | null) => {
  return fileKey ? `https://utfs.io/f/${fileKey}` : "";
  // 55e78a6c-1b73-408f-9ff1-f714eeb2548f-rnyzzv.jpg
};

export const getAvatarFallbackName = (name?: string | null) => {
  if (!name) return "";
  const [first, second] = name.split(" ");
  // return `${first?.[0]}${second?.[0]}`;
  return `${first ? first[0] : ""}${second ? second[0] : ""}`;
};
