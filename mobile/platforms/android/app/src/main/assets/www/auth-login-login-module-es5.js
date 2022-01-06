(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"], {
    /***/
    "./node_modules/js-sha256/src/sha256.js":
    /*!**********************************************!*\
      !*** ./node_modules/js-sha256/src/sha256.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function node_modulesJsSha256SrcSha256Js(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * [js-sha256]{@link https://github.com/emn178/js-sha256}
      *
      * @version 0.9.0
      * @author Chen, Yi-Cyuan [emn178@gmail.com]
      * @copyright Chen, Yi-Cyuan 2014-2017
      * @license MIT
      */

      /*jslint bitwise: true */


      (function () {
        'use strict';

        var ERROR = 'input is invalid type';
        var WINDOW = typeof window === 'object';
        var root = WINDOW ? window : {};

        if (root.JS_SHA256_NO_WINDOW) {
          WINDOW = false;
        }

        var WEB_WORKER = !WINDOW && typeof self === 'object';
        var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;

        if (NODE_JS) {
          root = global;
        } else if (WEB_WORKER) {
          root = self;
        }

        var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === 'object' && module.exports;

        var AMD = true && __webpack_require__(
        /*! !webpack amd options */
        "./node_modules/webpack/buildin/amd-options.js");

        var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
        var HEX_CHARS = '0123456789abcdef'.split('');
        var EXTRA = [-2147483648, 8388608, 32768, 128];
        var SHIFT = [24, 16, 8, 0];
        var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
        var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];
        var blocks = [];

        if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
          Array.isArray = function (obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
          };
        }

        if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
          ArrayBuffer.isView = function (obj) {
            return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
          };
        }

        var createOutputMethod = function createOutputMethod(outputType, is224) {
          return function (message) {
            return new Sha256(is224, true).update(message)[outputType]();
          };
        };

        var createMethod = function createMethod(is224) {
          var method = createOutputMethod('hex', is224);

          if (NODE_JS) {
            method = nodeWrap(method, is224);
          }

          method.create = function () {
            return new Sha256(is224);
          };

          method.update = function (message) {
            return method.create().update(message);
          };

          for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createOutputMethod(type, is224);
          }

          return method;
        };

        var nodeWrap = function nodeWrap(method, is224) {
          var crypto = eval("require('crypto')");
          var Buffer = eval("require('buffer').Buffer");
          var algorithm = is224 ? 'sha224' : 'sha256';

          var nodeMethod = function nodeMethod(message) {
            if (typeof message === 'string') {
              return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
            } else {
              if (message === null || message === undefined) {
                throw new Error(ERROR);
              } else if (message.constructor === ArrayBuffer) {
                message = new Uint8Array(message);
              }
            }

            if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
              return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
            } else {
              return method(message);
            }
          };

          return nodeMethod;
        };

        var createHmacOutputMethod = function createHmacOutputMethod(outputType, is224) {
          return function (key, message) {
            return new HmacSha256(key, is224, true).update(message)[outputType]();
          };
        };

        var createHmacMethod = function createHmacMethod(is224) {
          var method = createHmacOutputMethod('hex', is224);

          method.create = function (key) {
            return new HmacSha256(key, is224);
          };

          method.update = function (key, message) {
            return method.create(key).update(message);
          };

          for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createHmacOutputMethod(type, is224);
          }

          return method;
        };

        function Sha256(is224, sharedMemory) {
          if (sharedMemory) {
            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            this.blocks = blocks;
          } else {
            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          }

          if (is224) {
            this.h0 = 0xc1059ed8;
            this.h1 = 0x367cd507;
            this.h2 = 0x3070dd17;
            this.h3 = 0xf70e5939;
            this.h4 = 0xffc00b31;
            this.h5 = 0x68581511;
            this.h6 = 0x64f98fa7;
            this.h7 = 0xbefa4fa4;
          } else {
            // 256
            this.h0 = 0x6a09e667;
            this.h1 = 0xbb67ae85;
            this.h2 = 0x3c6ef372;
            this.h3 = 0xa54ff53a;
            this.h4 = 0x510e527f;
            this.h5 = 0x9b05688c;
            this.h6 = 0x1f83d9ab;
            this.h7 = 0x5be0cd19;
          }

          this.block = this.start = this.bytes = this.hBytes = 0;
          this.finalized = this.hashed = false;
          this.first = true;
          this.is224 = is224;
        }

        Sha256.prototype.update = function (message) {
          if (this.finalized) {
            return;
          }

          var notString,
              type = typeof message;

          if (type !== 'string') {
            if (type === 'object') {
              if (message === null) {
                throw new Error(ERROR);
              } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
                message = new Uint8Array(message);
              } else if (!Array.isArray(message)) {
                if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                  throw new Error(ERROR);
                }
              }
            } else {
              throw new Error(ERROR);
            }

            notString = true;
          }

          var code,
              index = 0,
              i,
              length = message.length,
              blocks = this.blocks;

          while (index < length) {
            if (this.hashed) {
              this.hashed = false;
              blocks[0] = this.block;
              blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            }

            if (notString) {
              for (i = this.start; index < length && i < 64; ++index) {
                blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
              }
            } else {
              for (i = this.start; index < length && i < 64; ++index) {
                code = message.charCodeAt(index);

                if (code < 0x80) {
                  blocks[i >> 2] |= code << SHIFT[i++ & 3];
                } else if (code < 0x800) {
                  blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
                  blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                } else if (code < 0xd800 || code >= 0xe000) {
                  blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
                  blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
                  blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                } else {
                  code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
                  blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
                  blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
                  blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
                  blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                }
              }
            }

            this.lastByteIndex = i;
            this.bytes += i - this.start;

            if (i >= 64) {
              this.block = blocks[16];
              this.start = i - 64;
              this.hash();
              this.hashed = true;
            } else {
              this.start = i;
            }
          }

          if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
          }

          return this;
        };

        Sha256.prototype.finalize = function () {
          if (this.finalized) {
            return;
          }

          this.finalized = true;
          var blocks = this.blocks,
              i = this.lastByteIndex;
          blocks[16] = this.block;
          blocks[i >> 2] |= EXTRA[i & 3];
          this.block = blocks[16];

          if (i >= 56) {
            if (!this.hashed) {
              this.hash();
            }

            blocks[0] = this.block;
            blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
          }

          blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
          blocks[15] = this.bytes << 3;
          this.hash();
        };

        Sha256.prototype.hash = function () {
          var a = this.h0,
              b = this.h1,
              c = this.h2,
              d = this.h3,
              e = this.h4,
              f = this.h5,
              g = this.h6,
              h = this.h7,
              blocks = this.blocks,
              j,
              s0,
              s1,
              maj,
              t1,
              t2,
              ch,
              ab,
              da,
              cd,
              bc;

          for (j = 16; j < 64; ++j) {
            // rightrotate
            t1 = blocks[j - 15];
            s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
            t1 = blocks[j - 2];
            s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
            blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
          }

          bc = b & c;

          for (j = 0; j < 64; j += 4) {
            if (this.first) {
              if (this.is224) {
                ab = 300032;
                t1 = blocks[0] - 1413257819;
                h = t1 - 150054599 << 0;
                d = t1 + 24177077 << 0;
              } else {
                ab = 704751109;
                t1 = blocks[0] - 210244248;
                h = t1 - 1521486534 << 0;
                d = t1 + 143694565 << 0;
              }

              this.first = false;
            } else {
              s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
              s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
              ab = a & b;
              maj = ab ^ a & c ^ bc;
              ch = e & f ^ ~e & g;
              t1 = h + s1 + ch + K[j] + blocks[j];
              t2 = s0 + maj;
              h = d + t1 << 0;
              d = t1 + t2 << 0;
            }

            s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
            s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
            da = d & a;
            maj = da ^ d & b ^ ab;
            ch = h & e ^ ~h & f;
            t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
            t2 = s0 + maj;
            g = c + t1 << 0;
            c = t1 + t2 << 0;
            s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
            s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
            cd = c & d;
            maj = cd ^ c & a ^ da;
            ch = g & h ^ ~g & e;
            t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
            t2 = s0 + maj;
            f = b + t1 << 0;
            b = t1 + t2 << 0;
            s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
            s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
            bc = b & c;
            maj = bc ^ b & d ^ cd;
            ch = f & g ^ ~f & h;
            t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
            t2 = s0 + maj;
            e = a + t1 << 0;
            a = t1 + t2 << 0;
          }

          this.h0 = this.h0 + a << 0;
          this.h1 = this.h1 + b << 0;
          this.h2 = this.h2 + c << 0;
          this.h3 = this.h3 + d << 0;
          this.h4 = this.h4 + e << 0;
          this.h5 = this.h5 + f << 0;
          this.h6 = this.h6 + g << 0;
          this.h7 = this.h7 + h << 0;
        };

        Sha256.prototype.hex = function () {
          this.finalize();
          var h0 = this.h0,
              h1 = this.h1,
              h2 = this.h2,
              h3 = this.h3,
              h4 = this.h4,
              h5 = this.h5,
              h6 = this.h6,
              h7 = this.h7;
          var hex = HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h4 >> 28 & 0x0F] + HEX_CHARS[h4 >> 24 & 0x0F] + HEX_CHARS[h4 >> 20 & 0x0F] + HEX_CHARS[h4 >> 16 & 0x0F] + HEX_CHARS[h4 >> 12 & 0x0F] + HEX_CHARS[h4 >> 8 & 0x0F] + HEX_CHARS[h4 >> 4 & 0x0F] + HEX_CHARS[h4 & 0x0F] + HEX_CHARS[h5 >> 28 & 0x0F] + HEX_CHARS[h5 >> 24 & 0x0F] + HEX_CHARS[h5 >> 20 & 0x0F] + HEX_CHARS[h5 >> 16 & 0x0F] + HEX_CHARS[h5 >> 12 & 0x0F] + HEX_CHARS[h5 >> 8 & 0x0F] + HEX_CHARS[h5 >> 4 & 0x0F] + HEX_CHARS[h5 & 0x0F] + HEX_CHARS[h6 >> 28 & 0x0F] + HEX_CHARS[h6 >> 24 & 0x0F] + HEX_CHARS[h6 >> 20 & 0x0F] + HEX_CHARS[h6 >> 16 & 0x0F] + HEX_CHARS[h6 >> 12 & 0x0F] + HEX_CHARS[h6 >> 8 & 0x0F] + HEX_CHARS[h6 >> 4 & 0x0F] + HEX_CHARS[h6 & 0x0F];

          if (!this.is224) {
            hex += HEX_CHARS[h7 >> 28 & 0x0F] + HEX_CHARS[h7 >> 24 & 0x0F] + HEX_CHARS[h7 >> 20 & 0x0F] + HEX_CHARS[h7 >> 16 & 0x0F] + HEX_CHARS[h7 >> 12 & 0x0F] + HEX_CHARS[h7 >> 8 & 0x0F] + HEX_CHARS[h7 >> 4 & 0x0F] + HEX_CHARS[h7 & 0x0F];
          }

          return hex;
        };

        Sha256.prototype.toString = Sha256.prototype.hex;

        Sha256.prototype.digest = function () {
          this.finalize();
          var h0 = this.h0,
              h1 = this.h1,
              h2 = this.h2,
              h3 = this.h3,
              h4 = this.h4,
              h5 = this.h5,
              h6 = this.h6,
              h7 = this.h7;
          var arr = [h0 >> 24 & 0xFF, h0 >> 16 & 0xFF, h0 >> 8 & 0xFF, h0 & 0xFF, h1 >> 24 & 0xFF, h1 >> 16 & 0xFF, h1 >> 8 & 0xFF, h1 & 0xFF, h2 >> 24 & 0xFF, h2 >> 16 & 0xFF, h2 >> 8 & 0xFF, h2 & 0xFF, h3 >> 24 & 0xFF, h3 >> 16 & 0xFF, h3 >> 8 & 0xFF, h3 & 0xFF, h4 >> 24 & 0xFF, h4 >> 16 & 0xFF, h4 >> 8 & 0xFF, h4 & 0xFF, h5 >> 24 & 0xFF, h5 >> 16 & 0xFF, h5 >> 8 & 0xFF, h5 & 0xFF, h6 >> 24 & 0xFF, h6 >> 16 & 0xFF, h6 >> 8 & 0xFF, h6 & 0xFF];

          if (!this.is224) {
            arr.push(h7 >> 24 & 0xFF, h7 >> 16 & 0xFF, h7 >> 8 & 0xFF, h7 & 0xFF);
          }

          return arr;
        };

        Sha256.prototype.array = Sha256.prototype.digest;

        Sha256.prototype.arrayBuffer = function () {
          this.finalize();
          var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
          var dataView = new DataView(buffer);
          dataView.setUint32(0, this.h0);
          dataView.setUint32(4, this.h1);
          dataView.setUint32(8, this.h2);
          dataView.setUint32(12, this.h3);
          dataView.setUint32(16, this.h4);
          dataView.setUint32(20, this.h5);
          dataView.setUint32(24, this.h6);

          if (!this.is224) {
            dataView.setUint32(28, this.h7);
          }

          return buffer;
        };

        function HmacSha256(key, is224, sharedMemory) {
          var i,
              type = typeof key;

          if (type === 'string') {
            var bytes = [],
                length = key.length,
                index = 0,
                code;

            for (i = 0; i < length; ++i) {
              code = key.charCodeAt(i);

              if (code < 0x80) {
                bytes[index++] = code;
              } else if (code < 0x800) {
                bytes[index++] = 0xc0 | code >> 6;
                bytes[index++] = 0x80 | code & 0x3f;
              } else if (code < 0xd800 || code >= 0xe000) {
                bytes[index++] = 0xe0 | code >> 12;
                bytes[index++] = 0x80 | code >> 6 & 0x3f;
                bytes[index++] = 0x80 | code & 0x3f;
              } else {
                code = 0x10000 + ((code & 0x3ff) << 10 | key.charCodeAt(++i) & 0x3ff);
                bytes[index++] = 0xf0 | code >> 18;
                bytes[index++] = 0x80 | code >> 12 & 0x3f;
                bytes[index++] = 0x80 | code >> 6 & 0x3f;
                bytes[index++] = 0x80 | code & 0x3f;
              }
            }

            key = bytes;
          } else {
            if (type === 'object') {
              if (key === null) {
                throw new Error(ERROR);
              } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
                key = new Uint8Array(key);
              } else if (!Array.isArray(key)) {
                if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
                  throw new Error(ERROR);
                }
              }
            } else {
              throw new Error(ERROR);
            }
          }

          if (key.length > 64) {
            key = new Sha256(is224, true).update(key).array();
          }

          var oKeyPad = [],
              iKeyPad = [];

          for (i = 0; i < 64; ++i) {
            var b = key[i] || 0;
            oKeyPad[i] = 0x5c ^ b;
            iKeyPad[i] = 0x36 ^ b;
          }

          Sha256.call(this, is224, sharedMemory);
          this.update(iKeyPad);
          this.oKeyPad = oKeyPad;
          this.inner = true;
          this.sharedMemory = sharedMemory;
        }

        HmacSha256.prototype = new Sha256();

        HmacSha256.prototype.finalize = function () {
          Sha256.prototype.finalize.call(this);

          if (this.inner) {
            this.inner = false;
            var innerHash = this.array();
            Sha256.call(this, this.is224, this.sharedMemory);
            this.update(this.oKeyPad);
            this.update(innerHash);
            Sha256.prototype.finalize.call(this);
          }
        };

        var exports = createMethod();
        exports.sha256 = exports;
        exports.sha224 = createMethod(true);
        exports.sha256.hmac = createHmacMethod();
        exports.sha224.hmac = createHmacMethod(true);

        if (COMMON_JS) {
          module.exports = exports;
        } else {
          root.sha256 = exports.sha256;
          root.sha224 = exports.sha224;

          if (AMD) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return exports;
            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          }
        }
      })();
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n  <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding='true'>\n  <div class=\"center\">\n  <img src=\"assets/images/logo.png\" class=\"smallLogo\"/>\n\n  </div>\n  <h1>  &nbsp;\n    &nbsp;Login</h1>\n  <form>\n  <ion-list>\n  <ion-item>\n  <ion-label position=\"stacked\">Username</ion-label>\n  <ion-input autocomplete=\"off\" type=\"text\" name=\"username\" [(ngModel)]=\"postData.username\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n  <ion-label position=\"stacked\">Password</ion-label>\n  <ion-input autocomplete=\"off\" type=\"password\" name=\"password\" [(ngModel)]=\"postData.password\"></ion-input>\n  </ion-item>\n\n  <ion-item lines='none'>\n  <a routerLink='/signup'>Create Account</a>\n  </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" share=\"round\" color=\"secondary\" (click)=\"loginAction()\">Login</ion-button>\n  </form>\n  </ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/webpack/buildin/amd-options.js":
    /*!****************************************!*\
      !*** (webpack)/buildin/amd-options.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function node_modulesWebpackBuildinAmdOptionsJs(module, exports) {
      /* WEBPACK VAR INJECTION */
      (function (__webpack_amd_options__) {
        /* globals __webpack_amd_options__ */
        module.exports = __webpack_amd_options__;
        /* WEBPACK VAR INJECTION */
      }).call(this, {});
      /***/
    },

    /***/
    "./src/app/auth/login/login-routing.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/auth/login/login-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppAuthLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/auth/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/auth/login/login.module.ts":
    /*!********************************************!*\
      !*** ./src/app/auth/login/login.module.ts ***!
      \********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppAuthLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/auth/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/auth/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/auth/login/login.page.scss":
    /*!********************************************!*\
      !*** ./src/app/auth/login/login.page.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/auth/login/login.page.ts":
    /*!******************************************!*\
      !*** ./src/app/auth/login/login.page.ts ***!
      \******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppAuthLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var js_sha256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! js-sha256 */
      "./node_modules/js-sha256/src/sha256.js");
      /* harmony import */


      var js_sha256__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _config_auth_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../config/auth-constants */
      "./src/config/auth-constants.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/storage.service */
      "./src/app/services/storage.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, authService, storageService) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.authService = authService;
          this.storageService = storageService;
          this.postData = {
            username: '',
            password: '',
            SignInId: ''
          };
          this.clientId = crypto.getRandomValues(new Uint32Array(1))[0];
          this.codeVerifier = crypto.getRandomValues(new Uint32Array(10))[0].toString();
          this.codeChallenge = Object(js_sha256__WEBPACK_IMPORTED_MODULE_3__["sha256"])(this.codeVerifier);
          this.authorizationCode = '';
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.preSignIn(this.clientId, this.codeChallenge).subscribe(function (res) {
              console.log(_this.codeVerifier);
              _this.postData.SignInId = res.SignInId;
            });
          }
        }, {
          key: "validateInputs",
          value: function validateInputs() {
            var username = this.postData.username.trim();
            var password = this.postData.password.trim();
            return this.postData.username && this.postData.password && username.length > 0 && password.length > 0;
          }
        }, {
          key: "loginAction",
          value: function loginAction() {
            var _this2 = this;

            if (this.validateInputs()) {
              this.authService.login(this.postData).subscribe(function (res) {
                if (res.authorizationCode) {
                  _this2.authorizationCode = res.authorizationCode;
                  console.log(_this2.postData.username);

                  _this2.authService.postSignIn(_this2.authorizationCode, _this2.codeVerifier, _this2.postData.username).subscribe(function (res) {
                    if (res.token) {
                      // Storing the User data.
                      _this2.storageService.store(_config_auth_constants__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH, res.token);

                      _this2.router.navigate(['tab1']);
                    }
                  }, function (error) {
                    console.log('Network Issue.');
                  });
                }
              }, function (error) {
                console.log('Network Issue.');
              });
            }
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/auth/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-login-login-module-es5.js.map