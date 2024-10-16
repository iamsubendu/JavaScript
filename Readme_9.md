# Event Bubbling, Capturing

These are 2 ways of event propogation in dom tree

## Bubbling

The event starts at the target element and bubbles up to its parent elements.
(child to top most)

ex: Clicking on a button inside a div: Imagine you have a button inside a div,
and both the button and the div have click event listeners. When you click on
the button, the click event will first trigger the button's event listener,
and then bubble up to the div's event listener.

## Capturing

The event starts from the outermost element and trickles down to the target.
(top most to child)

## How to use

addEventHandler("click",()=>{}, useCapture)
<br>
on the basis of this onCapture flag i.e, true/false browser decides
which method to follow
<br>
If you send false or don't use useCapture,
it will follow Bubble up method
