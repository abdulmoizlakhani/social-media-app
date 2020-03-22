// we can use uuid library for this
export const generateRandomId = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

//  get base64
export const getBase64 = (file, cb) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    cb(reader.result);
  };
  reader.onerror = function(error) {
    console.log("Error: ", error);
  };
};
