const config = {};

config.host = process.env.HOST || "https://cloudcomputing.documents.azure.com:443/";
config.authKey =
  process.env.AUTH_KEY || "Fv728Y9PKd1vb1lZcdzytOQbNsUBoBYuFwyrp6dup2wfedR1e3pQhmZhKEorHek9wGBcLHrWCL24E58j8eJFOQ==";
config.databaseId = "ToDoList";
config.containerId = "Items";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '8080'} to try the sample.`);
}

module.exports = config;