function collectData() {
  const languageP = document.getElementsByName("languageProficiency");
  console.log(languageP);

  // loop through the nodeList to find the selected radio button

  for (let i = 0; i < languageP.length; i++) {
    if (languageP[i].checked) {
      console.log(`Selected language is: ${languageP[i].value}`);
    }
  }

  // log all elements  with name "email"

  const emailEl = document.getElementsByName("email");
  console.log(emailEl);
}
