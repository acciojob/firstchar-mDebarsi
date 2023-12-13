function firstChar(text) {
  // your code here
	// Trim leading and trailing spaces
  const trimmedStr = text.trim();

  // Check if the trimmed string is not empty
  if (trimmedStr !== '') {
    // Return the first character of the trimmed string
    return trimmedStr.charAt(0);
  } else {
    // Return an empty string if the trimmed string is empty
    return '';
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
