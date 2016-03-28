# same-time-limit [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/same-time-limit.svg)](https://www.npmjs.com/package/same-time-limit) [![Downloads](https://img.shields.io/npm/dt/same-time-limit.svg)](https://www.npmjs.com/package/same-time-limit) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Run tasks in parallel with a limit.

## Installation

```sh
$ npm i --save same-time-limit
```

## Example

```js
const sameTimeLimit = require("same-time-limit");

sameTimeLimit([
    cb => setTimeout(_ => cb(null, 42), 1000)
  , cb => setTimeout(_ => cb(null, 43), 1000)
  , cb => setTimeout(_ => cb(null, 44), 1000)
  , cb => setTimeout(_ => cb(null, 45), 1000)
  , cb => setTimeout(_ => cb(null, 46), 1000)
], 2, (err, data) => {
    console.log(err || data);
});
```

## Documentation

### `sameTimeLimit(tasks, limit, cb)`
Runs async tasks in parallel but not more than a given limit in
the same time.

#### Params
- **Array** `tasks`: An array of async functions to call. Their first parameter should be the callback function.
- **Number** `limit`: The max count of functions to run in parallel.
- **Function** `cb`: The callback function.

#### Return
- **LimitIt** The `LimitIt` instance.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md