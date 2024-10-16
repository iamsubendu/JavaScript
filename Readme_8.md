# async & defer attributes

The async and defer attributes in HTML are used to control the loading
and execution of external JavaScript files.Both attributes allow the HTML
parsing process to continue without waiting for the script to be
downloaded, but they differ in when the script is executed.

2 major things happen in webPage

1. html parsing
2. loading of scripts

## Loading of scripts

Contains 2 parts:

1. Fetching the scripts
2. Executing the scripts line by line

`<script src="" ></script>`

In this, without first parsing whole html, it will pause when will found script tag,
will load script from network and then again will continue html parsing

`<script async src="" ></script>`

when we use async, Meanwhile html parsing is going on, the scripts are fetched
from the network asynchronously and when these are available, html parsing
stops and scripts are executed,then html parsing continuous

`<script defer src="" ></script>`

when we use defer, asynchronously scripts are fetched but after the completion of
html parsing, scripts are executed

## when to use

1. Don't use defer when script tags are dependent on each other, so we won't
   know if script tags are executed in order
2. Async can be used when script are not dependent on each other
