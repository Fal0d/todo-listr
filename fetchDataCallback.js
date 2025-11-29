function fetchDataWithCallback(callback) {
  setTimeout(function () {
    try {
      // Simulate error condition
      let error = false; // change to true to test error output

      if (error) {
        throw new Error("Fetch failed");
      }

      // If no error, return success message
      callback("Data fetched");

    } catch (err) {
      console.error("Error: " + err.message);
    }
  }, 2000);
}

// Example usage:
fetchDataWithCallback(function (message) {
  console.log(message); // Should log "Data fetched" if no error
});
