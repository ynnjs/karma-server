# karma-server

Building a http server for testing easily. Based on [Ynn](https://github.com/ynnjs/ynn);

## Install
```js
npm i --save-dev karma-server
```

## Configuration

```js
config.set( {
    frameworks : [ 'server' ],
    server : {
        namespace : 'S',
        root : 'test/server',
        static : 'test/server',
        modules : {
            home : './home'
        }
    }
} )

```

Code in test cases:
```js
it( 'xx', () => {
    fetch( S.host );
} );
```
