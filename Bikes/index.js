var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { ControlBoard } from './controlBoard.js';
import { Slider } from './slider.js';

/* 

    Create the general class App

*/

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.mainContainer = null;
        _this.changeBackground = _this.changeBackground.bind(_this);
        _this.changeConstructorImg = _this.changeConstructorImg.bind(_this);
        _this.rama = null;
        return _this;
    }

    _createClass(App, [{
        key: 'changeBackground',
        value: function changeBackground(modify) {
            switch (modify) {
                case 'middle':
                    this.mainContainer.style.backgroundImage = 'linear-gradient(104deg, #2C2C2C 57.2%, white 57.2%)';
                    this.mainContainer.style.color = 'black';
                    break;
                case 'black':
                    this.mainContainer.style.backgroundImage = 'linear-gradient(to right, #2C2C2C 50%, #2C2C2C 50%)';
                    this.mainContainer.style.color = 'white';
                    break;
                case 'white':
                    this.mainContainer.style.backgroundImage = 'linear-gradient(to right, white 50%, white 50%)';
            }
        }
    }, {
        key: 'changeConstructorImg',
        value: function changeConstructorImg(url) {
            this.rama.src = url;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: 'main-container', ref: function ref(_ref2) {
                        if (_ref2) _this2.mainContainer = _ref2;
                    } },
                React.createElement(
                    'section',
                    { className: 'show-container' },
                    React.createElement('img', { alt: '', className: 'constructor-img', src: './imgs/clearBike.png' }),
                    React.createElement('img', { alt: '', className: 'constructor-rama', src: './imgs/black_rama.png', ref: function ref(_ref) {
                            if (_ref) _this2.rama = _ref;
                        } })
                ),
                React.createElement(
                    'section',
                    { className: 'control-container' },
                    React.createElement(Slider, { changeMainContainer: this.changeBackground }),
                    React.createElement(ControlBoard, { changeConstructorImg: this.changeConstructorImg })
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App), document.getElementById('root'));