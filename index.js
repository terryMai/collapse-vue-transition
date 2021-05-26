
 if (process.env.NODE_ENV === 'production') {
     module.exports = require('./dist/collapse-vue-transition.min.js')
 } else {
     module.exports = require('./dist/collapse-vue-transition.js')
 }
