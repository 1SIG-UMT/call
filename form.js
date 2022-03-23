const radios = document.querySelectorAll('input[name="unit-entry"]');
const hhcLinks = {
  actionLink: "https://docs.google.com/forms/d/e/1FAIpQLSdOQ9BDVr75oMXSmm6HxuySPYlxPbTK7BRPs0zthdoQsTKgXg/formResponse?embedded=true",
  nameEntryLink: "entry.1976204530",
  pocEntryLink: "entry.1216413619",
  subjectEntryLink: "entry.16223029"
};
const esbLinks = {
  actionLink: "https://docs.google.com/forms/d/e/1FAIpQLSdDQP71yBQqrgFDb1AYjEF9n6-zji3NuwsJ6qerQIO5mfb-LA/formResponse?embedded=true",
  nameEntryLink: "entry.1976204530",
  pocEntryLink: "entry.1216413619",
  subjectEntryLink: "entry.16223029"
};
const ssbLinks = {
  actionLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_JKhIYpqWRdQPeaSBfqJqeJFq37VB2cR37Tfr4yQuhdlw7w/formResponse?embedded=true",
  nameEntryLink: "entry.1976204530",
  pocEntryLink: "entry.1216413619",
  subjectEntryLink: "entry.16223029"
};
const links = {
  hhc: hhcLinks,
  esb: esbLinks,
  ssb: ssbLinks
};


function handleRadioChange(){
  var checkedRadio;
  radios.forEach((radio) => {
    if(radio.checked){
      checkedRadio = radio;
    }
  });
  setFormLinksTo(links[checkedRadio.id]);
}

function setFormLinksTo(links){
  document.getElementById("counseling-form").setAttribute("action", links.actionLink);
  document.getElementById("name-entry").setAttribute("name", links.nameEntryLink);
  document.getElementById("poc-entry").setAttribute("name", links.pocEntryLink);
  document.getElementById("subject-entry").setAttribute("name", links.subjectEntryLink);
}

function alertAndReset(){
  alert("Successfully submitted!");
  document.getElementById("counseling-form").reset();
  document.getElementById("counseling-form").setAttribute("action", "");
  document.getElementById("name-entry").setAttribute("name", "");
  document.getElementById("poc-entry").setAttribute("name", "");
  document.getElementById("subject-entry").setAttribute("name", "");
}
