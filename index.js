// const express = require('express');
// const lib = require("./lib");

// var cors = require('cors')
// var app = express()

// app.use(cors())

// app.get("/", (req, res) => {
//   res.send(" Go to translate")
// })



// app.get('/translate/minion.json', (req, res) => {
  
//   var quer = req.query.text;
//   var splitArray = quer.split(" ");
//   // console.log(split.join(" "));


//   for (j=0;j<splitArray.length;j++){
//     var singleString = splitArray[j];
     

//     for (i=0;i<lib.length;i++){
//       var libString = lib[i];
//       var resArray = [];
      
//       if (libString.w.toUpperCase()==singleString.toUpperCase()){
//         resArray.push(libString.r);
//         var resString = resArray.join(' ');
//         console.log(resArray);
//       }else {
//         resArray.push(singleString);
//       }
      
//     }
//   }







  
//   // for (i=0;i<lib.length;i++){
//   //   var first=lib[i];     
//   //   var second = [];

//   //   for (j=0;j<split.length;j++){
//   //     var querStr = split[j];
//   //      if (first.w.toUpperCase() == querStr.toUpperCase()){
//   //        second.push(first.r);
//   //        var third = second.join(" ");
//   //        console.log(third);
//   //      }
        
//   //   }
   

//   // }
//   res.json({
//     "success": {
//         "total": 1
//     },
//     "contents": {
//         "translated": resString ,
//         "text": req.query.text || "text missing",
//         "translation": "minion"
//     }
// })
// });

// app.listen(3000, () => {
//   console.log('server started');
// });

const express = require('express');
const lib = require("./lib");

var cors = require('cors')
var app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.send(" Go to translate")
})



app.get('/translate/minion.json', (req, res) => {

    var quer = req.query.text;
    var splitArray = quer.split(" ");
    // console.log(split.join(" "));
    var resString = "";


    for (j = 0; j < splitArray.length; j++) {
        var singleString = splitArray[j];


        for (i = 0; i < lib.length; i++) {
            var libString = lib[i];
            var resArray = [];

            if (libString.w.toUpperCase() == singleString.toUpperCase()) {

                resArray.push(libString.r);
                resString = `${resString} ${libString.r}`;
            } else {
                // resArray.push(singleString);
                // resString = `${resString} ${singleString}`;

            }
        }
        console.log(resString);
    }
    res.json({
        "success": {
            "total": 1
        },
        "contents": {
            "translated": resString,
            "text": req.query.text || "text missing",
            "translation": "minion"
        }
    })
});

app.listen(3000, () => {
    console.log('server started');
});
