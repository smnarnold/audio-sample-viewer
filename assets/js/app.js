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
      recordRadios: document.forms.form.record
    };
    this.dimension = 1080;
    this.fps = 30;
    this.gutter = 10;
    this.record = false;
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
      this.dom.audio.addEventListener('ended', function () {
        return _this.stop();
      });
      Array.prototype.forEach.call(this.dom.recordRadios, function (radio) {
        radio.addEventListener('change', function () {
          return _this.record = _this.dom.recordRadios.value;
        });
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
      if (this.record) {
        this.capturer.stop();
        this.capturer.save();
      }
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

      if (this.record) {
        this.capturer.start();
      }

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

      if (this.record) {
        this.capturer.capture(this.dom.canvas);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXVkaW9GaWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbWFnZUZpbGUiLCJhdWRpbyIsImNhbnZhcyIsImNvbG9yUGlja2VyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInJlY29yZFJhZGlvcyIsImZvcm1zIiwicmVjb3JkIiwiZGltZW5zaW9uIiwiZnBzIiwiZ3V0dGVyIiwiY2FwdHVyZXIiLCJDQ2FwdHVyZSIsImZvcm1hdCIsImZyYW1lcmF0ZSIsImN0eCIsImdldENvbnRleHQiLCJpbWFnZU9iaiIsIkltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInZhbHVlIiwic2l6ZSIsInkiLCJpbWFnZSIsIm9yaWdpbmFsIiwiY29udGVudCIsIm1hcmdpbiIsInRleHRIZWlnaHQiLCJpbml0VmFycyIsImJpbmRFdmVudHMiLCJkcmF3QmFzaWMiLCJoYWxmV2lkdGgiLCJzZXRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZXRBdWRpbyIsInNldEltYWdlIiwic2V0QmFja2dyb3VuZENvbG9yIiwic2V0VGl0bGUiLCJzZXREZXNjcmlwdGlvbiIsInN0b3AiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsIiwicmFkaW8iLCJzcmNFbGVtZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInNyYyIsInJlc3VsdCIsImltZyIsInBhdGgiLCJ0b1VwcGVyQ2FzZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInN0YXJ0Iiwic2F2ZSIsImxvYWQiLCJwbGF5IiwiYXVkaW9DdHgiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZmZ0U2l6ZSIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsImJhciIsIk1hdGgiLCJyb3VuZCIsInN0YXJ0QW5pbWF0aW5nIiwiZHJhdyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXdCYXJzIiwiY2FwdHVyZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwiZm9udCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwicG9zWCIsImdldEJ5dGVGcmVxdWVuY3lEYXRhIiwieCIsInBvc1kiLCJhcHAiLCJpbml0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7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S3JGLEdBQUwsQ0FBUzRFLFNBQVQsR0FBcUIsS0FBSzFGLE1BQUwsQ0FBWWtCLGVBQWpDO0FBQ0EsWUFBSWtGLElBQUksR0FBRyxLQUFLcEcsTUFBTCxDQUFZeUIsS0FBWixDQUFrQkosTUFBbEIsR0FBMkIsS0FBSzRELEdBQUwsQ0FBUzVELE1BQXBDLEdBQTZDLENBQXhEO0FBQ0EsYUFBS1AsR0FBTCxDQUFTNkUsUUFBVCxDQUFrQk0sSUFBbEIsRUFBd0JHLElBQXhCLEVBQThCLEtBQUtuQixHQUFMLENBQVM3RCxLQUF2QyxFQUE4QyxLQUFLNkQsR0FBTCxDQUFTNUQsTUFBdkQ7QUFFQTRFLFlBQUksSUFBSSxLQUFLaEIsR0FBTCxDQUFTN0QsS0FBVCxHQUFpQixDQUF6QjtBQUNEO0FBQ0Y7Ozs7OztBQUdILElBQUlpRixHQUFHLEdBQUcsSUFBSTlHLEdBQUosRUFBVjtBQUNBOEcsR0FBRyxDQUFDQyxJQUFKLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYXBwLmpzXCIpO1xuIiwiY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZG9tID0ge1xyXG4gICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyksXHJcbiAgICAgIGF1ZGlvRmlsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvRmlsZScpLFxyXG4gICAgICBpbWFnZUZpbGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZUZpbGUnKSxcclxuICAgICAgYXVkaW86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdWRpbycpLFxyXG4gICAgICBjYW52YXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSxcclxuICAgICAgY29sb3JQaWNrZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvclBpY2tlcicpLFxyXG4gICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyksXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKSxcclxuICAgICAgcmVjb3JkUmFkaW9zOiBkb2N1bWVudC5mb3Jtcy5mb3JtLnJlY29yZCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kaW1lbnNpb24gPSAxMDgwO1xyXG4gICAgdGhpcy5mcHMgPSAzMDtcclxuICAgIHRoaXMuZ3V0dGVyID0gMTA7XHJcbiAgICB0aGlzLnJlY29yZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuY2FwdHVyZXIgPSBuZXcgQ0NhcHR1cmUoe1xyXG4gICAgICBmb3JtYXQ6ICd3ZWJtJyxcclxuICAgICAgZnJhbWVyYXRlOiB0aGlzLmZwcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY3R4ID0gdGhpcy5kb20uY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmltYWdlT2JqID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZjY2NjYnLFxyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICB3aWR0aDogdGhpcy5kaW1lbnNpb24sXHJcbiAgICAgIGhlaWdodDogdGhpcy5kaW1lbnNpb24sXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdmFsdWU6ICdUaXRsZScsXHJcbiAgICAgICAgc2l6ZTogNjAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgfSxcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICB2YWx1ZTogJ0Rlc2NyaXB0aW9uJyxcclxuICAgICAgICBzaXplOiA0MCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWFnZToge1xyXG4gICAgICAgIG9yaWdpbmFsOiB7XHJcbiAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiB0aGlzLmRpbWVuc2lvbixcclxuICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIHRleHRIZWlnaHQ6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kc1xyXG4gICAqL1xyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRWYXJzKCk7XHJcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIHRoaXMuZHJhd0Jhc2ljKCk7XHJcbiAgfVxyXG5cclxuICBpbml0VmFycygpIHtcclxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5kb20uY2FudmFzLndpZHRoO1xyXG4gICAgdGhpcy5jYW52YXMuaGFsZldpZHRoID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xyXG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5kb20uY2FudmFzLmhlaWdodDtcclxuICAgIHRoaXMuc2V0Q29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgYmluZEV2ZW50cygpIHtcclxuICAgIHRoaXMuZG9tLmF1ZGlvRmlsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4gdGhpcy5zZXRBdWRpbyhlKSk7XHJcbiAgICB0aGlzLmRvbS5pbWFnZUZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHRoaXMuc2V0SW1hZ2UoZSkpO1xyXG4gICAgdGhpcy5kb20uY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKGUpKTtcclxuICAgIHRoaXMuZG9tLnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHRoaXMuc2V0VGl0bGUoZSkpO1xyXG4gICAgdGhpcy5kb20uZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdGhpcy5zZXREZXNjcmlwdGlvbihlKSk7XHJcbiAgICB0aGlzLmRvbS5hdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHRoaXMuc3RvcCgpKTtcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5kb20ucmVjb3JkUmFkaW9zLCByYWRpbyA9PiB7XHJcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMucmVjb3JkID0gdGhpcy5kb20ucmVjb3JkUmFkaW9zLnZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudCgpIHtcclxuICAgIHRoaXMuY2FudmFzLmNvbnRlbnQudGV4dEhlaWdodCA9IHRoaXMuY2FudmFzLnRpdGxlLnNpemUgKyB0aGlzLmNhbnZhcy5kZXNjcmlwdGlvbi5zaXplICsgdGhpcy5ndXR0ZXI7XHJcbiAgICB0aGlzLmNhbnZhcy5jb250ZW50LmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuY2FudmFzLmltYWdlLmhlaWdodDtcclxuICAgIHRoaXMuY2FudmFzLmNvbnRlbnQubWFyZ2luID0gKHRoaXMuY2FudmFzLmNvbnRlbnQuaGVpZ2h0IC0gdGhpcy5jYW52YXMuY29udGVudC50ZXh0SGVpZ2h0KSAvIDI7XHJcbiAgICB0aGlzLmNhbnZhcy50aXRsZS55ID0gdGhpcy5jYW52YXMuaW1hZ2UuaGVpZ2h0ICsgdGhpcy5jYW52YXMuY29udGVudC5tYXJnaW47XHJcbiAgICB0aGlzLmNhbnZhcy5kZXNjcmlwdGlvbi55ID0gdGhpcy5jYW52YXMudGl0bGUueSArIHRoaXMuY2FudmFzLnRpdGxlLnNpemUgKyB0aGlzLmd1dHRlcjtcclxuICB9XHJcblxyXG4gIHNldEJhY2tncm91bmRDb2xvcihlKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5iYWNrZ3JvdW5kQ29sb3IgPSBlLnNyY0VsZW1lbnQudmFsdWU7XHJcbiAgICB0aGlzLmRyYXdCYXNpYygpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW1hZ2UoZSkge1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5yZWFkeVN0YXRlID09IEZpbGVSZWFkZXIuRE9ORSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmouc3JjID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuaW1hZ2VPYmoub25sb2FkID0gKGltZykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jYW52YXMuaW1hZ2Uub3JpZ2luYWwud2lkdGggPSBpbWcucGF0aFswXS53aWR0aDtcclxuICAgICAgICAgIHRoaXMuY2FudmFzLmltYWdlLm9yaWdpbmFsLmhlaWdodCA9IGltZy5wYXRoWzBdLmhlaWdodDtcclxuICAgICAgICAgIHRoaXMuY2FudmFzLmltYWdlLmhlaWdodCA9XHJcbiAgICAgICAgICAgICh0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmltYWdlLm9yaWdpbmFsLndpZHRoKSAqIHRoaXMuY2FudmFzLmltYWdlLm9yaWdpbmFsLmhlaWdodDtcclxuXHJcbiAgICAgICAgICB0aGlzLnNldENvbnRlbnQoKTtcclxuICAgICAgICAgIHRoaXMuZHJhd0Jhc2ljKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFRpdGxlKGUpIHtcclxuICAgIHRoaXMuY2FudmFzLnRpdGxlLnZhbHVlID0gZS5zcmNFbGVtZW50LnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB0aGlzLmRyYXdCYXNpYygpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGVzY3JpcHRpb24oZSkge1xyXG4gICAgdGhpcy5jYW52YXMuZGVzY3JpcHRpb24udmFsdWUgPSBlLnNyY0VsZW1lbnQudmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIHRoaXMuZHJhd0Jhc2ljKCk7XHJcbiAgfVxyXG5cclxuICBzZXRBdWRpbyhlKSB7XHJcbiAgICAvL3RoaXMuY2FwdHVyZXIudGltZUxpbWl0ID0gZS5jdXJyZW50VGFyZ2V0LmR1cmF0aW9uO1xyXG4gICAgLy90aGlzLmNhcHR1cmVyLmF1dG9TYXZlVGltZSA9IGUuY3VycmVudFRhcmdldC5kdXJhdGlvbjtcclxuICAgIGxldCBmaWxlID0gZS5zcmNFbGVtZW50LmZpbGVzWzBdO1xyXG4gICAgdGhpcy5kb20uYXVkaW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgIHRoaXMuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7XHJcbiAgICBpZiAodGhpcy5yZWNvcmQpIHtcclxuICAgICAgdGhpcy5jYXB0dXJlci5zdG9wKCk7XHJcbiAgICAgIHRoaXMuY2FwdHVyZXIuc2F2ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLmRvbS5hdWRpby5sb2FkKCk7XHJcbiAgICB0aGlzLmRvbS5hdWRpby5wbGF5KCk7XHJcblxyXG4gICAgbGV0IGF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgdGhpcy5zcmMgPSBhdWRpb0N0eC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UodGhpcy5kb20uYXVkaW8pO1xyXG4gICAgdGhpcy5hbmFseXNlciA9IGF1ZGlvQ3R4LmNyZWF0ZUFuYWx5c2VyKCk7XHJcblxyXG4gICAgdGhpcy5zcmMuY29ubmVjdCh0aGlzLmFuYWx5c2VyKTtcclxuICAgIHRoaXMuYW5hbHlzZXIuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XHJcbiAgICB0aGlzLmFuYWx5c2VyLmZmdFNpemUgPSAyNTY7XHJcbiAgICB0aGlzLmJ1ZmZlckxlbmd0aCA9IHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XHJcbiAgICB0aGlzLmRhdGFBcnJheSA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyTGVuZ3RoKTtcclxuXHJcbiAgICB0aGlzLmJhciA9IHtcclxuICAgICAgd2lkdGg6IE1hdGgucm91bmQodGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmJ1ZmZlckxlbmd0aCksXHJcbiAgICAgIGhlaWdodDogMCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRBbmltYXRpbmcoKSB7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICAgIGlmKHRoaXMucmVjb3JkKSB7XHJcbiAgICAgIHRoaXMuY2FwdHVyZXIuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZG9tLmF1ZGlvLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZHJhdygpKTtcclxuXHJcbiAgICB0aGlzLmRyYXdCYXNpYygpO1xyXG4gICAgdGhpcy5kcmF3QmFycygpO1xyXG5cclxuICAgIGlmICh0aGlzLnJlY29yZCkge1xyXG4gICAgICB0aGlzLmNhcHR1cmVyLmNhcHR1cmUodGhpcy5kb20uY2FudmFzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdCYXNpYygpIHtcclxuICAgIC8vIEJhY2tncm91bmQgQ29sb3JcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY2FudmFzLmJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIC8vIEltYWdlXHJcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZU9iaiwgMCwgMCwgdGhpcy5jYW52YXMuaW1hZ2Uud2lkdGgsIHRoaXMuY2FudmFzLmltYWdlLmhlaWdodCk7XHJcblxyXG4gICAgLy8gVGl0bGVcclxuICAgIHRoaXMuY3R4LmZvbnQgPSBgYm9sZCAke3RoaXMuY2FudmFzLnRpdGxlLnNpemV9cHggSGVsdmV0aWNhYDtcclxuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gJ2hhbmdpbmcnO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jYW52YXMuY29sb3I7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLmNhbnZhcy50aXRsZS52YWx1ZSwgdGhpcy5jYW52YXMuaGFsZldpZHRoLCB0aGlzLmNhbnZhcy50aXRsZS55LCB0aGlzLmNhbnZhcy53aWR0aCk7XHJcblxyXG4gICAgLy8gRGVzY3JpcHRpb25cclxuICAgIHRoaXMuY3R4LmZvbnQgPSBgJHt0aGlzLmNhbnZhcy5kZXNjcmlwdGlvbi5zaXplfXB4IEhlbHZldGljYWA7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dChcclxuICAgICAgdGhpcy5jYW52YXMuZGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICAgIHRoaXMuY2FudmFzLmhhbGZXaWR0aCxcclxuICAgICAgdGhpcy5jYW52YXMuZGVzY3JpcHRpb24ueSxcclxuICAgICAgdGhpcy5jYW52YXMud2lkdGhcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkcmF3QmFycygpIHtcclxuICAgIGxldCBwb3NYID0gMDtcclxuICAgIHRoaXMuYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEodGhpcy5kYXRhQXJyYXkpO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5idWZmZXJMZW5ndGg7IHgrKykge1xyXG4gICAgICB0aGlzLmJhci5oZWlnaHQgPSAodGhpcy5kYXRhQXJyYXlbeF0gLyAyNTYpICogNDAwO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNhbnZhcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgIGxldCBwb3NZID0gdGhpcy5jYW52YXMuaW1hZ2UuaGVpZ2h0IC0gdGhpcy5iYXIuaGVpZ2h0ICsgMTtcclxuICAgICAgdGhpcy5jdHguZmlsbFJlY3QocG9zWCwgcG9zWSwgdGhpcy5iYXIud2lkdGgsIHRoaXMuYmFyLmhlaWdodCk7XHJcblxyXG4gICAgICBwb3NYICs9IHRoaXMuYmFyLndpZHRoICogMjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnZhciBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5pbml0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=