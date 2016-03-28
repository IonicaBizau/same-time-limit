const sameTimeLimit = require("../lib");

sameTimeLimit([
    cb => setTimeout(_ => cb(null, 42), 1000)
  , cb => setTimeout(_ => cb(null, 43), 1000)
  , cb => setTimeout(_ => cb(null, 44), 1000)
  , cb => setTimeout(_ => cb(null, 45), 1000)
  , cb => setTimeout(_ => cb(null, 46), 1000)
], 2, (err, data) => {
    console.log(err || data);
});
