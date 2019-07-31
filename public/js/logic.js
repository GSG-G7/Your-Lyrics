const fetchApi = (cb) => {
  fetch('/api')
    .then(res => res.json())
    .then(data => cb(data))
    .catch(error => console.log(error));
};
