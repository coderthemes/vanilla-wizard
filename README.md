Vanilla Wizard 
============================

This Vanilla wizard plugin builds a wizard using a bootstrap tabs and vanilla javascript (No jQuery). It allows to build a wizard functionality using buttons to go through the different wizard steps.

Requirements
-------------
* Bootstrap 5.x

Install
-------------
```
yarn add vanilla-wizard --save 
npm install vanilla-wizard --save 
```

Code Examples
-------------

```javascript
//basic wizard
new Wizard('#basic');
```

```javascript
//wizard with options and events
//Add Progress bar
new Wizard('#basic',{
    progress:true,
})

//Add Form validation
new Wizard('#basic',{
    validate:true,
})

```




<p>&copy; <a href='https://coderthemes.com' target="_blank">Coderthemes Design LLP</a> 2022</p>

License
===============
The MIT License (MIT)

Copyright (c) 2021 - Coderthemes Design LLP

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.