const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const EmpModel = require("./Habits");
app.use(express.json());
app.use(cors());

var uri =
  "mongodb+srv://habit:habit123456@cluster0.ozepx.mongodb.net/habit?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true });

app.get("/insert", (req, res) => {




  const employee = new EmpModel({
    wTime:

    {
      Mon: { Start: "1am", End: "9pm", Work: true },
      Tue: { Start: "2am", End: "2pm", Work: false },
      Wed: { Start: "3am", End: "3pm", Work: true },
      Thu: { Start: "4am", End: "4pm", Work: true },
      Fri: { Start: "5am", End: "5pm", Work: false },
      Sat: { Start: "6am", End: "6pm", Work: true },
      Sun: { Start: "1am", End: "7pm", Work: true },

    },
    rAppW:

    {
      Mon: { RA: "com.facebook.com,com.instagram.com" },
      Tue: { RA: "com.facebook.com,com.instagram.com" },
      Wed: { RA: "com.facebook.com,com.instagram.com" },
      Thu: { RA: "com.facebook.com,com.instagram.com" },
      Fri: { RA: "com.facebook.com,com.instagram.com" },
      Sat: { RA: "com.facebook.com,com.instagram.com" },
      Sun: { RA: "com.facebook.com,com.instagram.com" },

    },
    rAppNW:

    {
      Mon: { RA: {"com.facebook":2,"com.instagram":3 }},
      Tue: { RA: {"com.facebook":2,"com.instagram":3 }},
      Wed: { RA: {"com.facebook":2,"com.instagram":3 }},
      Thu: { RA: {"com.facebook":2,"com.instagram":3 }},
      Fri: { RA: {"com.facebook":2,"com.instagram":3 }},
      Sat: { RA: {"com.facebook":2,"com.instagram":3 }},
      Sun: { RA: {"com.facebook":2,"com.instagram":3 }},

    },



  });

try {
  employee.save();
  res.send("inserdata");
} catch (err) {
  console.log(err);
}
});

app.get("/read", async (req, res) => {
  EmpModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


app.get("/", async (req, res) => {

  res.send("Success");

});


app.listen(3001, () => {
  console.log("server running on port 3001");

});
