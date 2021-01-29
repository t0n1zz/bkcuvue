(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ "./node_modules/html-truncate/lib/truncate.js":
/*!****************************************************!*\
  !*** ./node_modules/html-truncate/lib/truncate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Truncate HTML string and keep tag safe.
 *
 * @method truncate
 * @param {String} string string needs to be truncated
 * @param {Number} maxLength length of truncated string
 * @param {Object} options (optional)
 * @param {Boolean} [options.keepImageTag] flag to specify if keep image tag, false by default
 * @param {Boolean} [options.truncateLastWord] truncates last word, true by default
 * @param {Number} [options.slop] tolerance when options.truncateLastWord is false before we give up and just truncate at the maxLength position, 10 by default (but not greater than maxLength)
 * @param {Boolean|String} [options.ellipsis] omission symbol for truncated string, '...' by default
 * @return {String} truncated string
 */
function truncate(string, maxLength, options) {
    var EMPTY_OBJECT = {},
        EMPTY_STRING = '',
        DEFAULT_TRUNCATE_SYMBOL = '...',
        DEFAULT_SLOP = 10 > maxLength ? maxLength : 10,
        EXCLUDE_TAGS = ['img', 'br'],   // non-closed tags
        items = [],                     // stack for saving tags
        total = 0,                      // record how many characters we traced so far
        content = EMPTY_STRING,         // truncated text storage
        KEY_VALUE_REGEX = '([\\w|-]+\\s*(=\\s*"[^"]*")?\\s*)*',
        IS_CLOSE_REGEX = '\\s*\\/?\\s*',
        CLOSE_REGEX = '\\s*\\/\\s*',
        SELF_CLOSE_REGEX = new RegExp('<\\/?\\w+\\s*' + KEY_VALUE_REGEX + CLOSE_REGEX + '>'),
        HTML_TAG_REGEX = new RegExp('<\\/?\\w+\\s*' + KEY_VALUE_REGEX + IS_CLOSE_REGEX + '>'),
        URL_REGEX = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w\-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g, // Simple regexp
        IMAGE_TAG_REGEX = new RegExp('<img\\s*' + KEY_VALUE_REGEX + IS_CLOSE_REGEX + '>'),
        WORD_BREAK_REGEX = new RegExp('\\W+', 'g'),
        matches = true,
        result,
        index,
        tail,
        tag,
        selfClose;

    /**
     * Remove image tag
     *
     * @private
     * @method _removeImageTag
     * @param {String} string not-yet-processed string
     * @return {String} string without image tags
     */
    function _removeImageTag(string) {
        var match = IMAGE_TAG_REGEX.exec(string),
            index,
            len;

        if (!match) {
            return string;
        }

        index = match.index;
        len = match[0].length;

        return string.substring(0, index) + string.substring(index + len);
    }

    /**
     * Dump all close tags and append to truncated content while reaching upperbound
     *
     * @private
     * @method _dumpCloseTag
     * @param {String[]} tags a list of tags which should be closed
     * @return {String} well-formatted html
     */
    function _dumpCloseTag(tags) {
        var html = '';

        tags.reverse().forEach(function (tag, index) {
            // dump non-excluded tags only
            if (-1 === EXCLUDE_TAGS.indexOf(tag)) {
                html += '</' + tag + '>';
            }
        });

        return html;
    }

    /**
     * Process tag string to get pure tag name
     *
     * @private
     * @method _getTag
     * @param {String} string original html
     * @return {String} tag name
     */
    function _getTag(string) {
        var tail = string.indexOf(' ');

        // TODO:
        // we have to figure out how to handle non-well-formatted HTML case
        if (-1 === tail) {
            tail = string.indexOf('>');
            if (-1 === tail) {
                throw new Error('HTML tag is not well-formed : ' + string);
            }
        }

        return string.substring(1, tail);
    }


    /**
     * Get the end position for String#substring()
     *
     * If options.truncateLastWord is FALSE, we try to the end position up to
     * options.slop characters to avoid breaking in the middle of a word.
     *
     * @private
     * @method _getEndPosition
     * @param {String} string original html
     * @param {Number} tailPos (optional) provided to avoid extending the slop into trailing HTML tag
     * @return {Number} maxLength
     */
    function _getEndPosition (string, tailPos) {
        var defaultPos = maxLength - total,
            position = defaultPos,
            isShort = defaultPos < options.slop,
            slopPos = isShort ? defaultPos : options.slop - 1,
            substr,
            startSlice = isShort ? 0 : defaultPos - options.slop,
            endSlice = tailPos || (defaultPos + options.slop),
            result;

        if (!options.truncateLastWord) {

            substr = string.slice(startSlice, endSlice);

            if (tailPos && substr.length <= tailPos) {
                position = substr.length;
            }
            else {
                while ((result = WORD_BREAK_REGEX.exec(substr)) !== null) {
                    // a natural break position before the hard break position
                    if (result.index < slopPos) {
                        position = defaultPos - (slopPos - result.index);
                        // keep seeking closer to the hard break position
                        // unless a natural break is at position 0
                        if (result.index === 0 && defaultPos <= 1) break;
                    }
                    // a natural break position exactly at the hard break position
                    else if (result.index === slopPos) {
                        position = defaultPos;
                        break; // seek no more
                    }
                    // a natural break position after the hard break position
                    else {
                        position = defaultPos + (result.index - slopPos);
                        break;  // seek no more
                    }
                }
            }
            if (string.charAt(position - 1).match(/\s$/)) position--;
        }
        return position;
    }

    options = options || EMPTY_OBJECT;
    options.ellipsis = (undefined !== options.ellipsis) ? options.ellipsis : DEFAULT_TRUNCATE_SYMBOL;
    options.truncateLastWord = (undefined !== options.truncateLastWord) ? options.truncateLastWord : true;
    options.slop = (undefined !== options.slop) ? options.slop : DEFAULT_SLOP;

    while (matches) {
        matches = HTML_TAG_REGEX.exec(string);

        if (!matches) {
            if (total >= maxLength) { break; }

            matches = URL_REGEX.exec(string);
            if (!matches || matches.index >= maxLength) {
                content += string.substring(0, _getEndPosition(string));
                break;
            }

            while (matches) {
                result = matches[0];
                index = matches.index;
                content += string.substring(0, (index + result.length) - total);
                string = string.substring(index + result.length);
                matches = URL_REGEX.exec(string);
            }
            break;
        }

        result = matches[0];
        index = matches.index;

        if (total + index > maxLength) {
            // exceed given `maxLength`, dump everything to clear stack
            content += string.substring(0, _getEndPosition(string, index));
            break;
        } else {
            total += index;
            content += string.substring(0, index);
        }

        if ('/' === result[1]) {
            // move out open tag
            items.pop();
            selfClose=null;
        } else {
            selfClose = SELF_CLOSE_REGEX.exec(result);
            if (!selfClose) {
                tag = _getTag(result);

                items.push(tag);
            }
        }

        if (selfClose) {
            content += selfClose[0];
        } else {
            content += result;
        }
        string = string.substring(index + result.length);
    }

    if (string.length > maxLength - total && options.ellipsis) {
        content += options.ellipsis;
    }
    content += _dumpCloseTag(items);

    if (!options.keepImageTag) {
        content = _removeImageTag(content);
    }

    return content;
}

module.exports = truncate;


/***/ }),

/***/ "./node_modules/vue-truncate-collapsed/dist/vue-truncate-collapsed.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-truncate-collapsed/dist/vue-truncate-collapsed.es.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * vue-truncate-collapsed v1.9.0
 * (c) 2018-present João Vitor Cavalcante
 * Released under the MIT License.
 */
(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " a[data-v-11b2e33f] { cursor: pointer; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var h2p = __webpack_require__(/*! html-truncate */ "./node_modules/html-truncate/lib/truncate.js");

var truncate = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [!_vm.show && _vm.type !== 'html' ? _c('div', [_c('span', { class: _vm.textClass }, [_vm._v(" " + _vm._s(_vm.truncate(_vm.text)) + " ")]), _vm._v(" "), _vm.text.length >= _vm.length ? _c('a', { class: _vm.actionClass, on: { "click": function ($event) {
          _vm.toggle();
        } } }, [_vm._v(_vm._s(_vm.clamp))]) : _vm._e()]) : !_vm.show && _vm.type === 'html' ? _c('div', [_c('span', { class: _vm.textClass, domProps: { "innerHTML": _vm._s(_vm.truncate(_vm.text)) } }), _vm._v(" "), _vm.text.length >= _vm.length ? _c('a', { class: _vm.actionClass, on: { "click": function ($event) {
          _vm.toggle();
        } } }, [_vm._v(_vm._s(_vm.clamp))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.show && _vm.type !== 'html' ? _c('div', [_c('span', [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _vm.text.length >= _vm.length ? _c('a', { class: _vm.actionClass, on: { "click": function ($event) {
          _vm.toggle();
        } } }, [_vm._v(_vm._s(_vm.less))]) : _vm._e()]) : _vm.show && _vm.type === 'html' ? _c('div', [_vm.text.length >= _vm.length ? _c('div', { domProps: { "innerHTML": _vm._s(_vm.text) } }) : _vm._e(), _vm._v(" "), _vm.text.length >= _vm.length ? _c('a', { class: _vm.actionClass, on: { "click": function ($event) {
          _vm.toggle();
        } } }, [_vm._v(_vm._s(_vm.less))]) : _c('p', [_vm._v(" " + _vm._s(_vm.h2p(_vm.text)) + " ")])]) : _vm._e()]);
  }, staticRenderFns: [], _scopeId: 'data-v-11b2e33f',
  name: 'Truncate',

  props: {
    collapsedTextClass: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      required: true
    },
    clamp: {
      type: String,
      default: 'Read More'
    },
    length: {
      type: Number,
      default: 100
    },
    less: {
      type: String,
      default: 'Show Less'
    },
    type: {
      type: String,
      default: 'text'
    },
    actionClass: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      show: false,
      counter: this.length
    };
  },
  computed: {
    textClass: function textClass() {
      return this.text.length > this.length && this.collapsedTextClass ? this.collapsedTextClass : '';
    }
  },
  methods: {
    truncate: function truncate(string) {
      if (string) {
        if (this.type === 'html') { return h2p(string, this.length, { ellipsis: '' }); }

        return string.toString().substring(0, this.length);
      }

      return '';
    },
    toggle: function toggle() {
      this.show = !this.show;
    },

    h2p: function h2p$1(text) {
      return h2p(text);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (truncate);


/***/ })

}]);