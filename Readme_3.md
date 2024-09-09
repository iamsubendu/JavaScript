const sampleStr = 'Alan said, \"Peter is learning JavaScript\".';
console.log(sampleStr);

This signals to JavaScript that the following quote is not
the end of the string, but should instead appear inside the string.

Alan said, "Peter is learning JavaScript".

================================================================

\' single quote
\" double quote
\\ backslash
\n newline
\t tab
\r carriage return
\b backspace
\f form feed

================================================================

Type Coercion

In order for JavaScript to compare two different data
types (for example, numbers and strings), it must convert
one type to another. This is known as Type Coercion.

1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true

================================================================

Strict equality (===) is the counterpart to the equality operator (==).
However, unlike the equality operator, which attempts to convert
both values being compared to a common type, the strict equality
operator does not perform a type conversion.

3 === 3 // true
3 === '3' // false

================================================================

Like the equality operator, the greater than operator
will convert data types of values while comparing.

5 > 3 // true
7 > '3' // true
2 > 3 // false
'1' > 9 // false

================================================================
