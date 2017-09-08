## Documentation

You can see below the API reference of this module.

### `sameTimeLimit(tasks, limit, cb, store)`
Runs async tasks in parallel but not more than a given limit in
the same time.

#### Params

- **Array** `tasks`: An array of async functions to call. Their first parameter should be the callback function.
- **Number** `limit`: The max count of functions to run in parallel.
- **Function** `cb`: The callback function.
- **Array** `store`: An optional array to store the data in. If `null`, data won't be stored.

#### Return
- **LimitIt** The `LimitIt` instance.

