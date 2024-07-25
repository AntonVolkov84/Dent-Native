export default function getAvatarColor(letter) {
  const charCode = letter.charCodeAt();
  if (charCode >= 1040 && charCode <= 1047) {
    return {
      background: "#DAD5f8",
      color: "#816CFF",
    };
  }
  if (charCode >= 1048 && charCode <= 1055) {
    return {
      background: "#F5D6D9",
      color: "#F38181",
    };
  }
  if (charCode >= 1056 && charCode <= 1071) {
    return {
      background: "#E9F5FF",
      color: "#2A86FF",
    };
  }
  return { background: "red", color: "orange" };
}
