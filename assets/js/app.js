/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.dom = {
      form: document.querySelector('form'),
      audioFile: document.getElementById('audioFile'),
      imageFile: document.getElementById('imageFile'),
      audio: document.getElementById('audio'),
      canvas: document.getElementById('canvas'),
      colorPicker: document.getElementById('colorPicker'),
      title: document.getElementById('title'),
      description: document.getElementById('description'),
      stop: document.getElementById('stop')
    };
    this.dimension = 1080;
    this.fps = 30;
    this.gutter = 10;
    this.capturer = new CCapture({
      format: 'webm',
      framerate: this.fps
    });
    this.ctx = this.dom.canvas.getContext('2d');
    this.imageObj = new Image();
    this.canvas = {
      backgroundColor: '#ff6666',
      color: '#ffffff',
      width: this.dimension,
      height: this.dimension,
      title: {
        value: 'Title',
        size: 60,
        y: 0
      },
      description: {
        value: 'Description',
        size: 40,
        y: 0
      },
      image: {
        original: {
          width: 0,
          height: 0
        },
        width: this.dimension,
        height: 0
      },
      content: {
        margin: 0,
        height: 0,
        textHeight: 0
      }
    };
  }
  /**
   * Methods
   */


  _createClass(App, [{
    key: "init",
    value: function init() {
      this.initVars();
      this.bindEvents();
      this.drawBasic();
    }
  }, {
    key: "initVars",
    value: function initVars() {
      this.canvas.width = this.dom.canvas.width;
      this.canvas.halfWidth = this.canvas.width / 2;
      this.canvas.height = this.dom.canvas.height;
      this.setContent();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.dom.audioFile.addEventListener('change', function (e) {
        return _this.setAudio(e);
      });
      this.dom.imageFile.addEventListener('change', function (e) {
        return _this.setImage(e);
      });
      this.dom.colorPicker.addEventListener('change', function (e) {
        return _this.setBackgroundColor(e);
      });
      this.dom.title.addEventListener('keyup', function (e) {
        return _this.setTitle(e);
      });
      this.dom.description.addEventListener('keyup', function (e) {
        return _this.setDescription(e);
      });
      this.dom.stop.addEventListener('click', function () {
        return _this.stop();
      });
    }
  }, {
    key: "setContent",
    value: function setContent() {
      this.canvas.content.textHeight = this.canvas.title.size + this.canvas.description.size + this.gutter;
      this.canvas.content.height = this.canvas.height - this.canvas.image.height;
      this.canvas.content.margin = (this.canvas.content.height - this.canvas.content.textHeight) / 2;
      this.canvas.title.y = this.canvas.image.height + this.canvas.content.margin;
      this.canvas.description.y = this.canvas.title.y + this.canvas.title.size + this.gutter;
    }
  }, {
    key: "setBackgroundColor",
    value: function setBackgroundColor(e) {
      this.canvas.backgroundColor = e.srcElement.value;
      this.drawBasic();
    }
  }, {
    key: "setImage",
    value: function setImage(e) {
      var _this2 = this;

      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        if (e.target.readyState == FileReader.DONE) {
          _this2.imageObj.src = e.target.result;

          _this2.imageObj.onload = function (img) {
            _this2.canvas.image.original.width = img.path[0].width;
            _this2.canvas.image.original.height = img.path[0].height;
            _this2.canvas.image.height = _this2.canvas.width / _this2.canvas.image.original.width * _this2.canvas.image.original.height;

            _this2.setContent();

            _this2.drawBasic();
          };
        }
      };
    }
  }, {
    key: "setTitle",
    value: function setTitle(e) {
      this.canvas.title.value = e.srcElement.value.toUpperCase();
      this.drawBasic();
    }
  }, {
    key: "setDescription",
    value: function setDescription(e) {
      this.canvas.description.value = e.srcElement.value.toUpperCase();
      this.drawBasic();
    }
  }, {
    key: "setAudio",
    value: function setAudio(e) {
      //this.capturer.timeLimit = e.currentTarget.duration;
      //this.capturer.autoSaveTime = e.currentTarget.duration;
      var file = e.srcElement.files[0];
      this.dom.audio.src = URL.createObjectURL(file);
      this.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.capturer.stop();
      this.capturer.save();
    }
  }, {
    key: "start",
    value: function start() {
      this.dom.audio.load();
      this.dom.audio.play();
      var audioCtx = new AudioContext();
      this.src = audioCtx.createMediaElementSource(this.dom.audio);
      this.analyser = audioCtx.createAnalyser();
      this.src.connect(this.analyser);
      this.analyser.connect(audioCtx.destination);
      this.analyser.fftSize = 256;
      this.bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);
      this.bar = {
        width: Math.round(this.canvas.width / this.bufferLength),
        height: 0
      };
      this.startAnimating();
    }
  }, {
    key: "startAnimating",
    value: function startAnimating() {
      this.draw();
      this.capturer.start();
      this.dom.audio.play();
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this3 = this;

      window.requestAnimationFrame(function () {
        return _this3.draw();
      });
      this.drawBasic();
      this.drawBars();
      this.capturer.capture(this.dom.canvas);
    }
  }, {
    key: "drawBasic",
    value: function drawBasic() {
      // Background Color
      this.ctx.fillStyle = this.canvas.backgroundColor;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); // Image

      this.ctx.drawImage(this.imageObj, 0, 0, this.canvas.image.width, this.canvas.image.height); // Title

      this.ctx.font = "bold ".concat(this.canvas.title.size, "px Helvetica");
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'hanging';
      this.ctx.fillStyle = this.canvas.color;
      this.ctx.fillText(this.canvas.title.value, this.canvas.halfWidth, this.canvas.title.y, this.canvas.width); // Description

      this.ctx.font = "".concat(this.canvas.description.size, "px Helvetica");
      this.ctx.fillText(this.canvas.description.value, this.canvas.halfWidth, this.canvas.description.y, this.canvas.width);
    }
  }, {
    key: "drawBars",
    value: function drawBars() {
      var posX = 0;
      this.analyser.getByteFrequencyData(this.dataArray);

      for (var x = 0; x < this.bufferLength; x++) {
        this.bar.height = this.dataArray[x] / 256 * 400;
        this.ctx.fillStyle = this.canvas.backgroundColor;
        var posY = this.canvas.image.height - this.bar.height + 1;
        this.ctx.fillRect(posX, posY, this.bar.width, this.bar.height);
        posX += this.bar.width * 2;
      }
    }
  }]);

  return App;
}();

var app = new App();
app.init();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXVkaW9GaWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbWFnZUZpbGUiLCJhdWRpbyIsImNhbnZhcyIsImNvbG9yUGlja2VyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0b3AiLCJkaW1lbnNpb24iLCJmcHMiLCJndXR0ZXIiLCJjYXB0dXJlciIsIkNDYXB0dXJlIiwiZm9ybWF0IiwiZnJhbWVyYXRlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImltYWdlT2JqIiwiSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwidmFsdWUiLCJzaXplIiwieSIsImltYWdlIiwib3JpZ2luYWwiLCJjb250ZW50IiwibWFyZ2luIiwidGV4dEhlaWdodCIsImluaXRWYXJzIiwiYmluZEV2ZW50cyIsImRyYXdCYXNpYyIsImhhbGZXaWR0aCIsInNldENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNldEF1ZGlvIiwic2V0SW1hZ2UiLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwic3JjRWxlbWVudCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzcmMiLCJyZXN1bHQiLCJpbWciLCJwYXRoIiwidG9VcHBlckNhc2UiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGFydCIsInNhdmUiLCJsb2FkIiwicGxheSIsImF1ZGlvQ3R4IiwiQXVkaW9Db250ZXh0IiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiYW5hbHlzZXIiLCJjcmVhdGVBbmFseXNlciIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImZmdFNpemUiLCJidWZmZXJMZW5ndGgiLCJmcmVxdWVuY3lCaW5Db3VudCIsImRhdGFBcnJheSIsIlVpbnQ4QXJyYXkiLCJiYXIiLCJNYXRoIiwicm91bmQiLCJzdGFydEFuaW1hdGluZyIsImRyYXciLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3QmFycyIsImNhcHR1cmUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInBvc1giLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsIngiLCJwb3NZIiwiYXBwIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZNQSxHOzs7QUFDSixpQkFBYztBQUFBOztBQUNaLFNBQUtDLEdBQUwsR0FBVztBQUNUQyxVQUFJLEVBQUVDLFFB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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2FwcC5qc1wiKTtcbiIsImNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRvbSA9IHtcclxuICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLFxyXG4gICAgICBhdWRpb0ZpbGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdWRpb0ZpbGUnKSxcclxuICAgICAgaW1hZ2VGaWxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlJyksXHJcbiAgICAgIGF1ZGlvOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXVkaW8nKSxcclxuICAgICAgY2FudmFzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyksXHJcbiAgICAgIGNvbG9yUGlja2VyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3JQaWNrZXInKSxcclxuICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyksXHJcbiAgICAgIHN0b3A6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wJyksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGltZW5zaW9uID0gMTA4MDtcclxuICAgIHRoaXMuZnBzID0gMzA7XHJcbiAgICB0aGlzLmd1dHRlciA9IDEwO1xyXG5cclxuICAgIHRoaXMuY2FwdHVyZXIgPSBuZXcgQ0NhcHR1cmUoe1xyXG4gICAgICBmb3JtYXQ6ICd3ZWJtJyxcclxuICAgICAgZnJhbWVyYXRlOiB0aGlzLmZwcyxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuZG9tLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5pbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIHRoaXMuY2FudmFzID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmY2NjY2JyxcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgd2lkdGg6IHRoaXMuZGltZW5zaW9uLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuZGltZW5zaW9uLFxyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIHZhbHVlOiAnVGl0bGUnLFxyXG4gICAgICAgIHNpemU6IDYwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgdmFsdWU6ICdEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgc2l6ZTogNDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgfSxcclxuICAgICAgaW1hZ2U6IHtcclxuICAgICAgICBvcmlnaW5hbDoge1xyXG4gICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiB0aGlzLmRpbWVuc2lvbixcclxuICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDoge1xyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgdGV4dEhlaWdodDogMFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kc1xyXG4gICAqL1xyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRWYXJzKCk7XHJcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIHRoaXMuZHJhd0Jhc2ljKCk7XHJcbiAgfVxyXG5cclxuICBpbml0VmFycygpIHtcclxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5kb20uY2FudmFzLndpZHRoO1xyXG4gICAgdGhpcy5jYW52YXMuaGFsZldpZHRoID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xyXG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5kb20uY2FudmFzLmhlaWdodDtcclxuICAgIHRoaXMuc2V0Q29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgYmluZEV2ZW50cygpIHtcclxuICAgIHRoaXMuZG9tLmF1ZGlvRmlsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4gdGhpcy5zZXRBdWRpbyhlKSk7XHJcbiAgICB0aGlzLmRvbS5pbWFnZUZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHRoaXMuc2V0SW1hZ2UoZSkpO1xyXG4gICAgdGhpcy5kb20uY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKGUpKTtcclxuICAgIHRoaXMuZG9tLnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHRoaXMuc2V0VGl0bGUoZSkpO1xyXG4gICAgdGhpcy5kb20uZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdGhpcy5zZXREZXNjcmlwdGlvbihlKSk7XHJcbiAgICB0aGlzLmRvbS5zdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zdG9wKCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudCgpIHtcclxuICAgIHRoaXMuY2FudmFzLmNvbnRlbnQudGV4dEhlaWdodCA9IHRoaXMuY2FudmFzLnRpdGxlLnNpemUgKyB0aGlzLmNhbnZhcy5kZXNjcmlwdGlvbi5zaXplICsgdGhpcy5ndXR0ZXI7XHJcbiAgICB0aGlzLmNhbnZhcy5jb250ZW50LmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuY2FudmFzLmltYWdlLmhlaWdodDtcclxuICAgIHRoaXMuY2FudmFzLmNvbnRlbnQubWFyZ2luID0gKHRoaXMuY2FudmFzLmNvbnRlbnQuaGVpZ2h0IC0gdGhpcy5jYW52YXMuY29udGVudC50ZXh0SGVpZ2h0KSAvIDI7XHJcbiAgICB0aGlzLmNhbnZhcy50aXRsZS55ID0gdGhpcy5jYW52YXMuaW1hZ2UuaGVpZ2h0ICsgdGhpcy5jYW52YXMuY29udGVudC5tYXJnaW47XHJcbiAgICB0aGlzLmNhbnZhcy5kZXNjcmlwdGlvbi55ID0gdGhpcy5jYW52YXMudGl0bGUueSArIHRoaXMuY2FudmFzLnRpdGxlLnNpemUgKyB0aGlzLmd1dHRlcjtcclxuICB9XHJcblxyXG4gIHNldEJhY2tncm91bmRDb2xvcihlKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5iYWNrZ3JvdW5kQ29sb3IgPSBlLnNyY0VsZW1lbnQudmFsdWU7XHJcbiAgICB0aGlzLmRyYXdCYXNpYygpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW1hZ2UoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5yZWFkeVN0YXRlID09IEZpbGVSZWFkZXIuRE9ORSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmouc3JjID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmoub25sb2FkID0gKGltZykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jYW52YXMuaW1hZ2Uub3JpZ2luYWwud2lkdGggPSBpbWcucGF0aFswXS53aWR0aDtcclxuICAgICAgICAgIHRoaXMuY2FudmFzLmltYWdlLm9yaWdpbmFsLmhlaWdodCA9IGltZy5wYXRoWzBdLmhlaWdodDtcclxuICAgICAgICAgIHRoaXMuY2FudmFzLmltYWdlLmhlaWdodCA9IHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaW1hZ2Uub3JpZ2luYWwud2lkdGggKiB0aGlzLmNhbnZhcy5pbWFnZS5vcmlnaW5hbC5oZWlnaHQ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMuc2V0Q29udGVudCgpO1xyXG4gICAgICAgICAgdGhpcy5kcmF3QmFzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZShlKSB7XHJcbiAgICB0aGlzLmNhbnZhcy50aXRsZS52YWx1ZSA9IGUuc3JjRWxlbWVudC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgdGhpcy5kcmF3QmFzaWMoKTtcclxuICB9XHJcblxyXG4gIHNldERlc2NyaXB0aW9uKGUpIHtcclxuICAgIHRoaXMuY2FudmFzLmRlc2NyaXB0aW9uLnZhbHVlID0gZS5zcmNFbGVtZW50LnZhbHVlLnRvVXBwZXJDYXNlKClcclxuICAgIHRoaXMuZHJhd0Jhc2ljKCk7XHJcbiAgfVxyXG5cclxuICBzZXRBdWRpbyhlKSB7XHJcbiAgICAvL3RoaXMuY2FwdHVyZXIudGltZUxpbWl0ID0gZS5jdXJyZW50VGFyZ2V0LmR1cmF0aW9uO1xyXG4gICAgLy90aGlzLmNhcHR1cmVyLmF1dG9TYXZlVGltZSA9IGUuY3VycmVudFRhcmdldC5kdXJhdGlvbjtcclxuICAgIGxldCBmaWxlID0gZS5zcmNFbGVtZW50LmZpbGVzWzBdO1xyXG4gICAgdGhpcy5kb20uYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgIHRoaXMuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7XHJcbiAgICB0aGlzLmNhcHR1cmVyLnN0b3AoKTtcclxuICAgIHRoaXMuY2FwdHVyZXIuc2F2ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLmRvbS5hdWRpby5sb2FkKCk7XHJcbiAgICB0aGlzLmRvbS5hdWRpby5wbGF5KCk7XHJcblxyXG4gICAgbGV0IGF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgdGhpcy5zcmMgPSBhdWRpb0N0eC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UodGhpcy5kb20uYXVkaW8pO1xyXG4gICAgdGhpcy5hbmFseXNlciA9IGF1ZGlvQ3R4LmNyZWF0ZUFuYWx5c2VyKCk7XHJcblxyXG4gICAgdGhpcy5zcmMuY29ubmVjdCh0aGlzLmFuYWx5c2VyKTtcclxuICAgIHRoaXMuYW5hbHlzZXIuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XHJcbiAgICB0aGlzLmFuYWx5c2VyLmZmdFNpemUgPSAyNTY7XHJcbiAgICB0aGlzLmJ1ZmZlckxlbmd0aCA9IHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XHJcbiAgICB0aGlzLmRhdGFBcnJheSA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyTGVuZ3RoKTtcclxuXHJcbiAgICB0aGlzLmJhciA9IHtcclxuICAgICAgd2lkdGg6IE1hdGgucm91bmQodGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmJ1ZmZlckxlbmd0aCksXHJcbiAgICAgIGhlaWdodDogMFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XHJcbiAgfVxyXG5cclxuICBzdGFydEFuaW1hdGluZygpIHtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gICAgdGhpcy5jYXB0dXJlci5zdGFydCgpO1xyXG4gICAgdGhpcy5kb20uYXVkaW8ucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5kcmF3KCkpO1xyXG5cclxuICAgIHRoaXMuZHJhd0Jhc2ljKCk7XHJcbiAgICB0aGlzLmRyYXdCYXJzKCk7XHJcblxyXG4gICAgdGhpcy5jYXB0dXJlci5jYXB0dXJlKHRoaXMuZG9tLmNhbnZhcyk7XHJcbiAgfVxyXG5cclxuICBkcmF3QmFzaWMoKSB7XHJcbiAgICAvLyBCYWNrZ3JvdW5kIENvbG9yXHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNhbnZhcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAvLyBJbWFnZVxyXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2VPYmosIDAsIDAsIHRoaXMuY2FudmFzLmltYWdlLndpZHRoLCB0aGlzLmNhbnZhcy5pbWFnZS5oZWlnaHQpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICB0aGlzLmN0eC5mb250ID0gYGJvbGQgJHt0aGlzLmNhbnZhcy50aXRsZS5zaXplfXB4IEhlbHZldGljYWA7XHJcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIHRoaXMuY3R4LnRleHRCYXNlbGluZSA9ICdoYW5naW5nJztcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY2FudmFzLmNvbG9yO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5jYW52YXMudGl0bGUudmFsdWUsIHRoaXMuY2FudmFzLmhhbGZXaWR0aCwgdGhpcy5jYW52YXMudGl0bGUueSwgdGhpcy5jYW52YXMud2lkdGgpO1xyXG5cclxuICAgIC8vIERlc2NyaXB0aW9uXHJcbiAgICB0aGlzLmN0eC5mb250ID0gYCR7dGhpcy5jYW52YXMuZGVzY3JpcHRpb24uc2l6ZX1weCBIZWx2ZXRpY2FgO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5jYW52YXMuZGVzY3JpcHRpb24udmFsdWUsIHRoaXMuY2FudmFzLmhhbGZXaWR0aCwgdGhpcy5jYW52YXMuZGVzY3JpcHRpb24ueSwgdGhpcy5jYW52YXMud2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0JhcnMoKSB7XHJcbiAgICBsZXQgcG9zWCA9IDA7XHJcbiAgICB0aGlzLmFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKHRoaXMuZGF0YUFycmF5KTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYnVmZmVyTGVuZ3RoOyB4KyspIHtcclxuICAgICAgdGhpcy5iYXIuaGVpZ2h0ID0gKHRoaXMuZGF0YUFycmF5W3hdIC8gMjU2KSAqIDQwMDtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jYW52YXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICBsZXQgcG9zWSA9IHRoaXMuY2FudmFzLmltYWdlLmhlaWdodCAtIHRoaXMuYmFyLmhlaWdodCArIDE7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHBvc1gsIHBvc1ksIHRoaXMuYmFyLndpZHRoLCB0aGlzLmJhci5oZWlnaHQpO1xyXG5cclxuICAgICAgcG9zWCArPSB0aGlzLmJhci53aWR0aCAqIDI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG52YXIgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuaW5pdCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9