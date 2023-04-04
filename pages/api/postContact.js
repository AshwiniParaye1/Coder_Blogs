import * as fs from "fs";

// Define an async function called "handler" that takes in two parameters: "req" and "res"
export default async function handler(req, res) {
  // Check if the HTTP request method is "POST"
  if (req.method === "POST") {
    // Process a POST request
    // Read the contents of the "contactdata" directory using fs.promises.readdir
    let data = await fs.promises.readdir("contactdata");
    // Write the request body to a new JSON file in the "contactdata" directory
    fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
    // Send a HTTP 200 response with a JSON object { success: true }
    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method (e.g., GET, PUT, DELETE, etc.)
    // Send a HTTP 200 response with a JSON array containing the string "allBlogs"
    res.status(200).json(["allBlogs"]);
  }
}
