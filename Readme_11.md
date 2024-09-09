Lists are of 2 types

* Linear Lists - Stacks, Queues => Operations can be performed 
either at start or end

* Non-linear Liosts - Graphs,trees => Operations can be 
performed anywhere
Operations of Data Structure

================================================================

1.Traversal -  refers to the process of systematically visiting
 each element (node) in a data structure and performing some 
 operation on it.
2.Insertion
3.Deletion
4.Searching
5.Sorting
6.Merging

================================================================

Algorithm Complexity
An algorithm is a step-by-step procedure or set of rules 
for solving a particular problem

space complexity = memory/  amount of space required
                 = auxillary space + input size
 
time complexity = no of steps to finish the execution
Depends on no. of inputs


both should be minimum

================================================================

Asymptotic analysis and notation
 
Asymptotic analysis is a method used to evaluate the 
performance of algorithms, particularly as the input 
size grows towards infinity. 

f(n) = 5n^2 + 6n + 12
-> 5(loop inside loop) + 6(loop) + 12
-> Assuming n is very large, so removing 6n + 12
-> so f(n) will be 5n^2


Big O Notation (O):
Represents an upper bound of an algorithm's running time. 
It gives the worst-case scenario of the growth rate of 
an algorithm.
Maximum time

Big Theta Notation (Θ):
Represents a tight bound of an algorithm's running time. 
It gives both the upper and lower bounds, describing 
the exact asymptotic behavior.
Average Time

Big Omega Notation (Ω):
Represents a lower bound of an algorithm's running time. 
It gives the best-case scenario of the growth rate of 
an algorithm.
Minimum Time

================================================================

Recursion Data Structure

Recursion in JavaScript involves a function calling itself 
within its own definition. It's a powerful programming 
technique commonly used for solving problems that can be 
broken down into smaller, similar subproblems.

================================================================

Indirect Recursion Data Structure

Indirect recursion is a concept in computer programming 
and data structures where a function calls another function, 
which in turn calls the first function, creating a 
loop of function calls. In the context of data structures, 
indirect recursion can also refer to situations where data 
structures reference each other in a circular manner.

For example, consider two functions, functionA and functionB, 
where functionA calls functionB, and functionB calls functionA. 
This creates a loop of function calls, known as indirect recursion

================================================================

Head & Tail Recursion Data Structure


================================================================

Call Stack
The call stack is a mechanism used to manage function calls 
and their execution context.
It uses a Last-In-First-Out (LIFO) approach