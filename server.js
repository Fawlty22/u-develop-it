const express = require('express');
//Porting
const PORT = process.env.PORT || 3001;
//App Instance
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

  
//Listener 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });