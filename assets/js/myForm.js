const submit = document.getElementById("submit");

const getFormData = () => {
  const form = document.getElementById("form");
  return new FormData(form);
}

const toJson = function(event) {
  const formData = getFormData();
  event.preventDefault();
  let object = {};
  formData.forEach((value, key) => {
    if (!Reflect.has(object, key)) {
      object[key] = value;
      return;
    }
    if (!Array.isArray(object[key])) {
      object[key] = [object[key]];
    }
    object[key].push(value);
  });
  let json = JSON.stringify(object);
  console.log(json);
};

submit.addEventListener("click", toJson);
