import ProxyImage from "./image.proxy";

const image1 = new ProxyImage("photo1.jpg");
const image2 = new ProxyImage("photo2.jpg");

console.log("Displaying image1 for the first time:");
image1.display();

console.log("\nDisplaying image1 again:");
image1.display();

console.log("\nDisplaying image2 for the first time:");
image2.display();
