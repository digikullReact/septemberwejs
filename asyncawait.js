const list = document.getElementById('list');
/*
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    data.forEach(function (ele) {
      let li = document.createElement('li');
      li.innerText = ele.title;
      list.appendChild(li);
    });
  });
  */

// Async await -->
// they are just
// async is used with function

async function apiCall() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.json();
    data.forEach(function (ele) {
      let li = document.createElement('li');
      li.innerText = ele.title;
      list.appendChild(li);
    });
  } catch (err) {
    console.log(err);
  }

  //console.log(data);
}

apiCall();
