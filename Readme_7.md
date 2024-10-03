# Debouncing & Throttling

Debouncing and throttling are two techniques used to control the rate
at which a function is invoked, particularly in scenarios where
frequent events are triggered, such as user input, scrolling, or resizing.
<br>
These are used for optimizing performance of web-app
<br>
Happens by limiting the rate of function calls

## Debouncing

Debouncing involves delaying the execution of a function until a certain
amount of time has passed since the last event occurrence. This technique
is useful when you want to wait for a pause in the events before
triggering a function.
<br>
It will only make call after waiting certain period of time after
keystroke presses last time
<br>
Difference between 2 key strokes

1. Search bar autocomplete : Debouncing is useful when implementing a
   search bar with autocomplete functionality. We can delay the execution
   of the search function until the user has stopped typing for a certain
   amount of time, reducing the number of unnecessary searches.
   <br>
2. Form validation: Debouncing can be used to validate form input fields.
   We can delay the execution of the validation function until the user
   has stopped typing for a certain amount of time, reducing the number
   of unnecessary validation checks.
   <br>
3. Live search suggestions: Debouncing is useful when implementing live
   search suggestions. We can delay the execution of the search function
   until the user has stopped typing for a certain amount of time, reducing
   the number of unnecessary searches.

## Throttling:

Throttling, on the other hand, involves limiting the execution of a function
to a fixed rate, regardless of how frequently the events are triggered.
This technique is useful when you want to ensure that a function is
executed at a controlled rate, even if the events are triggered rapidly.
<br>
It will only make call if the difference between fn calls are fulfilled.
Howmuch triggers you apply it won't matter.
<br>
Difference between 2 function calls

1. Scrolling event handling: Throttling is useful when handling scrolling
   events. We can limit the execution of the event handler to a fixed rate,
   preventing excessive function calls and improving performance.
   <br>
2. Mouse movement event handling: Throttling is useful when handling mouse
   movement events. We can limit the execution of the event handler to a fixed rate,
   preventing excessive function calls and improving performance.
   <br>
3. Window resizing event handling: Throttling is useful when handling window
   resizing events. We can limit the execution of the event handler to a fixed rate,
   preventing excessive function calls and improving performance.
