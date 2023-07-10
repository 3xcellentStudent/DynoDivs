const express = require('express')
const path = require('path')
const app = express()
// "start": "nodemon ./server/server.js"
const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
   const pathway = path.join(__dirname, '../public/index.html')

   res.sendFile(pathway, err => {
      if(err) console.log(err)
      console.log('Sent: index.html')
   })
})

// app.get('/api/space', (req, res) => {
//    const pathway = path.join(__dirname, 'db.json')

//    res.sendFile(pathway, err => {
//       if(err) console.log(err)
//       console.log('Sent: db.json')
//    })
// })

app.listen(PORT, () => {
   try {
      console.log(`Server has been started on PORT: ${PORT}...`)
   }
   catch (err){console.log(err)}
})