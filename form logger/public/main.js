const form = document.getElementById("e2ee-form");
const result = document.getElementById("form-result");

form.addEventListener("submit", async function (e) {
  /* FormData: Summarizes the Data from the Form Tag. */
  const formData = new FormData(form);
  e.preventDefault();
  let object = {};
  let template = [];
  formData.forEach((value, key) => {
    template.push(key + ": " + value + "\n");
  });
  object.message = template.join("");
  object.message = await encryptMessage(object.message);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Congrats your message is recieved!";
        console.log(JSON.stringify(json));
        form.style.display = "none";
      } else {
        console.log(response);
        result.innerHTML = "Something went wrong!";
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    });
});



async function encryptMessage(message) {
  var pubkey = document.getElementById('base64-pubkey').value;
  const publicKey = await openpgp.readKey({ armoredKey: atob(pubkey) });
  return await openpgp.encrypt({
    message: await openpgp.createMessage({ text: message }),
    encryptionKeys: publicKey,
  });
}