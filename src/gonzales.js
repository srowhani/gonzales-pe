'use strict';

var Node = require('./node/basic-node');
var parse = require('./parse');

export const gonzales = {
  createNode (options) {
    return new Node(options);
  },
  parse: parse
};
