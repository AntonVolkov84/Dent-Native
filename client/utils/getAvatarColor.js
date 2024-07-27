export default function getAvatarColor(letter) {
  const charCode = letter.charCodeAt();
  if (charCode >= 65 && charCode <= 71) {
    return {
      background: "#DAD5f8",
      color: "#816CFF",
    };
  }
  if (charCode >= 72 && charCode <= 82) {
    return {
      background: "#F5D6D9",
      color: "#F38181",
    };
  }
  if (charCode >= 83 && charCode <= 90) {
    return {
      background: "#E9F5FF",
      color: "#2A86FF",
    };
  }
  return { background: "red", color: "orange" };
}
