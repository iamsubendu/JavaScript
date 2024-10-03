## Promise

A promise is an ob representing eventual completion or failure of an async operation.

## Promise.all

it takes an array of promises as an input

Promise.all([p1(3s),p2(2s),p3(1s)])
it will wait for all of them to finish
if all success
after 3s -> it will give the output as combination of all in chain

if any of the promise gets rejected
Promise.all([p1(3s),p2(2s),p3(1s)])
p2 get rejected
Promise.all will also throw error as soon as it will get reject from p2
output will be error same returned by p2
it won't wait for other promises to get resolved/ rejected
p1 and p3 won't get cancelled

============================================================================

## Promise.allSettled

Promise.all([p1(3s),p2(2s),p3(1s)])
will give same result in success case as .all
when any promise gets rejected
it will wait for all other promises to get complete
and will return all results inside

============================================================================

## Promise.race

Promise.all([p1(3s),p2(2s),p3(1s)])
As soon as first promise is resolved, it will return result of p3
If p3 throws error, it will return that result only
So, for any case success or failure, it will return result of
1st resolved/rejected

============================================================================

## Promise.any

Promise.all([p1(3s),p2(2s),p3(1s)])
It returns the value wait for 1st success/fulfilled/resolved.
If all get fails, the return result will be an aggregated error.
Aggregated error (e1 + e2 + e3)

============================================================================
