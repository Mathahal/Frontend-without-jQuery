import request from "superagent"

let test = (test) => true

request
  .get('/test.php')
  .set('Accept', 'application/json')
  .end(( err, res) => {
    let test = JSON.parse(res.text)
    console.log(test.test)
  })
  console.log(12333333232323)

console.log(test())