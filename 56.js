// Debouncing example: Search bar autocomplete
const searchInput = document.getElementById("search-input");
const searchFunction = debounce(() => {
  // Make API call to fetch search results
}, 500);
// The debounced search function is called once
// after the user has stopped typing for 500 milliseconds, reducing
// the number of unnecessary searches.

searchInput.addEventListener("input", searchFunction);

// Throttling example: Scrolling event handling
const scrollHandler = throttle(() => {
  // Handle scrolling event
}, 100);

window.addEventListener("scroll", scrollHandler);

// The throttled scroll handler
// is called at a fixed rate of 100 milliseconds, preventing
// excessive function calls and improving performance.
