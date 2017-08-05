# Comic Collector

[![Requirements Status](https://requires.io/github/wengole/comiccollector/requirements.svg?branch=master)](https://requires.io/github/wengole/comiccollector/requirements/?branch=master)

## Synopsis

This is the code for the [Comic Collector website](http://www.comiccollector.co);
a web application to keep track of your comic collection, including wishlists
and suggested reading order

## Motivation

Having an ever growing collection of graphic novels, I became increasingly lost in what I needed to read and in what order
as well as what I needed to buy to complete gaps in my reading order.

Comic Collector strives to solve this dilemma by collecting suggested reading orders from around the web into a database.
Users can then search this database for books they'd like to read or currently have in their collection,
these can be added to a virtual collection/wishlist.
The app will then automatically tell you what you have next to read and what you should buy next to complete any reading orders in your collection

## Installation

### Dependencies

To run the code locally you will need:
 * `PostgreSQL ≥ 9.4`
 * `Python ≥ 3.6`
 * `nodejs and npm or yarn`

Create a virtualenv, activate it and run

```
pip install -r requirements.txt
```
Then run
```
npm install
-- OR --
yarn install
```

## Tests

There are currently no tests, but this is a priority now the site is live.

## Contributors

The code is hosted on [GitHub](www.github.com/wengole/comiccollector) with an issue tracker.
Feel free to raise any issues you have with the application

## License

BSD 3 Clause

Copyright (c) 2016, Ben Cole (wengole@gmail.com)

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
