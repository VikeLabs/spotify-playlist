const login = () => {
  fetch("/login")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => console.log(data))
    .catch((err) => console.log("login.js: ", err));
};

export default login;
