document.querySelector("main button").addEventListener("click", () => {
  let date = document.querySelector("input[type='date']").value;
  let luckyNumber = document.querySelector("input[type='number']").value;

  if (date && luckyNumber) {
    date = date.replaceAll("-", "");
    date = [...date];

    let sum = date.reduce((sum, no) => {
      return parseInt(sum) + parseInt(no);
    });

    if (sum % luckyNumber === 0) {
      setMessage("Your Birthday is lucky 🥳 🥳 🥳");
    } else {
      setMessage("Uh-oh.. Not a lucky birthday.");
    }
  } else {
    alert("Please fillup all the fields");
  }
});

const setMessage = (msg) => {
  document.querySelector("main span").innerText = msg;
};
