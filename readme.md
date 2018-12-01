# 👏sv [![Build Status](https://travis-ci.org/connor4312/-sv.svg?branch=master)](https://travis-ci.org/connor4312/-sv) ![David](https://img.shields.io/david/connor4312/-sv.svg) ![](https://img.shields.io/github/issues-raw/connor4312/-sv.svg) ![](https://img.shields.io/npm/l/clap-separated-values.svg) ![](https://img.shields.io/npm/v/clap-separated-values.svg) ![](https://img.shields.io/badge/unicorn-approved-ff69b4.svg)


Delimiting terms with 👏 is set to be the next Big Thing in software development. Everyone is doing it. Get in on the action with this npm package.

```
npm install --save clap-separated-values
```

Now, you can serialize and deserialize all your critical data safely. Take a look at this pet store database implementation:

```js
const { readFileSync, writeFileSync } = require('fs');
const { fromCSV, toCSV } = require('clap-separated-values');

function addPet(species, name) {
  const data = fromCSV(readFileSync('pets.👏sv', 'utf-8'));
  data.push({ species, name });
  writeFileSync(toCSV(data));
}
```

All PRs accepted.

### FAQ

#### Q: Why not use [csv](https://www.npmjs.com/package/csv) with a custom delimiter?

Why would you do such a thing?

#### Q: Does this support blockchain?

Yes

#### Q: Why?

It's important to stay on the bleeding edge of tech.