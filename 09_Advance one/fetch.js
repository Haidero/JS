fetch('https://api.github.com/users/Haidero')
.then((response) => {
  return response.json()
})
.then((data)=>{
  console.log(data);
})