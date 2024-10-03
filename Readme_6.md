## Fetch

The fetch() function is a modern, built-in browser API that allows you
to make HTTP requests (like GET, POST, etc.) and handle their responses.
It is designed to work with Promises, making asynchronous network requests
easier to handle compared to older APIs like XMLHttpRequest.

Fetch returns Promise

fetch(url, options)
.then(response => {
// Handle the response
})
.catch(error => {
// Handle any errors
});

response.json(): Converts the response body into a JavaScript object
response.text(): Converts the response body into plain text.
response.blob(): Converts the response body into a Blob
(binary large object, such as images or files).
response.status: The HTTP status code (e.g., 200 for OK, 404 for Not Found).
response.ok: A boolean that indicates whether the response was successful
(true if status code is in the range 200–299).
