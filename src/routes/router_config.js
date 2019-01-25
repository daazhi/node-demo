let config = {
  appName: 'nodejs demo',
  appVer: '0.0.1',
  users: [
    {type: "get", path: "/users/findAll", key: 'findAll'},
    {type: "get", path: "/users/findById", key: 'findById'},
    {type: "post", path: "/users/save", key: 'save'},
    {type: "post", path: "/users/update", key: 'update'},
    {type: "post", path: "/users/deleteById", key: 'deleteById'}
  ],
  goods: [
    {type: "get", path: "/users/findAll", key: 'findAll'},
    {type: "get", path: "/users/findById", key: 'findById'},
    {type: "post", path: "/users/save", key: 'save'},
    {type: "post", path: "/users/update", key: 'update'},
    {type: "post", path: "/users/deleteById", key: 'deleteById'}
  ]
}

module.exports = config