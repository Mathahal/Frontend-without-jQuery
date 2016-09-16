import request from "superagent"

let test = (test) => true

request
  .get('/test.php')
  .set('Accept', 'application/json')
  .end(( err, res) => {
    let test = JSON.parse(res.text)
    console.log( test.text )
  })
  

console.log(test())