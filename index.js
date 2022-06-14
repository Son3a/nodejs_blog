const express = require('express') //Nạp thư viện express và lưu vào biến
const app = express() // ứng dụng nodejs, một đối tượng có thể xây dựng lại website
const port = 3000 //port để run website

app.get('/trang-chu', (req, res) => { // Định nghĩa tuyến đường
  var a = 1;
  var b = 2;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})