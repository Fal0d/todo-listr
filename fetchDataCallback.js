// fetchDataCallback.js

function fetchDataWithCallback(callback) {
     setTimeout(function () {
       try {
         // Simulate an error condition; change to false to always succeed
         const error = Math.random() < 0.5;  // 50% chance of error
   
         if (error) {
           // Simulate failure
           throw new Error("Fetch failed");
         }
   
         // If we reach here, no error — call the callback with the result
         callback("Data fetched");
       } catch (err) {
         // Handle the error: log error message
         console.error("Error: " + err.message);
       }
     }, 2000);
   }
   
   
   fetchDataWithCallback(function (result) {
     console.log(result);
   });
   