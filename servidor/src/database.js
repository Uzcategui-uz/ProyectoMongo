const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/codenotch', { useNewUrlParser: false, useUnifiedTopology: false }).then((db) => {
    console.log("database connected on " + db.connection.host)
}).catch((error) => {
    console.log(error);
})