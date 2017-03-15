# rx-fb
Rx wrapper for fb package

### Version
1.0.2

### Installation

```sh
$ npm install rx-fb --save
```

### Usage

```sh
'use strict';

const RxFB = require('rx-fb')

let rxfb = new RxFB({
    version:     FACEBOOK_API_VERSION,
    appId:       FACEBOOK_APP_ID,
    appSecret:   FACEBOOK_APP_SECRET,
    accessToken: FACEBOOK_ACCESS_TOKEN
});

let source = rxfb.api('VasaVasaKitchen/posts');

source.subscribe(
    response => console.log(response),
    error    => console.log(error),
    complete => console.log('complete')
);
```

### Avoid Pagination
It's possible to retrive all the edge of a node using the all method

```
let source = rxfb.all('VasaVasaKitchen/posts');

source.subscribe(
    response => console.log(response),
    error    => console.log(error),
    complete => console.log('complete')
);
```

License
----

MIT
