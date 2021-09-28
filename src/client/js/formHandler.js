import { checkForName } from "./nameChecker";
import { urlChecker } from "./urlChecker";

//Globale variable
const server = "http://localhost:8081/";
const agreementElement = document.getElementById("agreement");
const subjectivityElement = document.getElementById("subjectivity");
const ironyElement = document.getElementById("irony");
function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  checkForName(formText);
  //check the url if valid or not
  let checkUrl = Client.urlChecker(formText);

  if (checkUrl) {
    postData(`${server}api`, { url: formText }).then((res) => {
      agreementElement.innerHTML += res.agreement;
      subjectivityElement.innerHTML += res.subjectivity;
      ironyElement.innerHTML += res.irony;
    });
  } else {
    alert(" invalid URL, please try with a valid URL.");
  }
}

async function postData(url = "", data = {}) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    return resData;
  } catch (error) {
    console.log("error" + error);
  }
}

export { handleSubmit };
