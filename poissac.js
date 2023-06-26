// Function to add the widget inside the content
function addWidget() {
  // Create the anchor element
  var anchor = document.createElement('a');
  anchor.href = 'https://s.click.aliexpress.com/e/_DlYoWcd?bz=500*500';
  anchor.target = '_blank';

  // Create the image element
  var image = document.createElement('img');
  image.style.height = '100%';
  image.style.width = '100%';
  image.style.objectFit = 'contain';
  image.src = 'https://ae01.alicdn.com/kf/Se4f7ae2baa844e13978f6aafa8b0dad5i.jpg';
  image.alt = 'AliExpress Sponsored Link';

  // Append the image to the anchor
  anchor.appendChild(image);

  // Create a paragraph for the call-to-action
  var ctaParagraph = document.createElement('p');
  ctaParagraph.innerHTML = 'Click here for more information!';

  // Append the call-to-action paragraph to the anchor
  anchor.appendChild(ctaParagraph);

  // Get the content container
  var contentContainer = document.getElementById('post-body');

  // Generate a random position to insert the widget
  var insertPosition = Math.floor(Math.random() * (contentContainer.childElementCount + 1));

  // Insert the widget at the calculated position
  contentContainer.insertBefore(anchor, contentContainer.children[insertPosition]);
}

// Calculate the number of widgets to add based on the number of content elements
function calculateNumWidgets() {
  var contentElements = document.querySelectorAll('.post-body.entry-content > *');
  var numWidgets = Math.min(Math.floor(contentElements.length / 2), 5); // Maximum 5 widgets, at least 2 content elements per widget
  return numWidgets;
}

// Add the widgets
var numWidgets = 50;
for (var i = 0; i < numWidgets; i++) {
  addWidget();
}
