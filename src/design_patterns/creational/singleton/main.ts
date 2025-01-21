import AppConfig from "./AppConfig";

const config1 = AppConfig.getInstance(); // Creating a new AppConfig instance
config1.set("apiURL", "https://api.example.com");
config1.set("retryAttempts", 3);

const config2 = AppConfig.getInstance();
console.log(config2.get("apiURL")); // https://api.example.com
console.log(config2.get("retryAttempts")); // 3

console.log(config1 === config2); // true
