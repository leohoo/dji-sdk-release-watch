// Get the JSON strings passed as arguments
const json1String = process.argv[2];
const json2String = process.argv[3];

if (!json1String || !json2String) {
  console.log("Please provide both JSON strings as arguments.");
  process.exit(1);
}

try {
  // Parse the JSON strings into objects
  const json1 = JSON.parse(json1String);
  const json2 = JSON.parse(json2String);

  // Function to compare and log changes
  const deepCompareAndLogChanges = (obj1, obj2) => {
    for (const key in obj1) {
      if (obj1.hasOwnProperty(key)) {
        if (!obj2.hasOwnProperty(key)) {
          console.log(`Key "${key}" has been removed.`);
        } else if (obj1[key] !== obj2[key]) {
          console.log(`Key "${key}" has changed from "${obj1[key]}" to "${obj2[key]}"`);
        }
      }
    }

    for (const key in obj2) {
      if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
        console.log(`Key "${key}" has been added.`);
      }
    }
  };

  // Compare and log the changes
  deepCompareAndLogChanges(json1, json2);

} catch (error) {
  console.error("Invalid JSON string provided.");
}

