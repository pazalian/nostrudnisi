switch (type) {
  case "img":
    // Handle the image case here
    // For example, you could create an image element and set its source
    const imgElement = document.createElement('img');
    imgElement.src = 'path/to/your/image.jpg';
    document.body.appendChild(imgElement);
    break;
  
  // Other cases can be handled here
  default:
    console.log("Default case");
}
