var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function changeValue(border, modify) {
    var _this = this;

    if (modify == 'plus') this.setState(function (currentState) {
        return { currentValue: currentState.currentValue + _this.step };
    });else this.setState(function (currentState) {
        return { currentValue: currentState.currentValue - _this.step };
    });
    if (this.slider.value != border) setTimeout(changeValue.bind(this), 25, border, modify);
}

export var Slider = function (_React$Component) {
    _inherits(Slider, _React$Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this2 = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _this2.counter = 0;
        _this2.slider = null;
        _this2.clickHandler = _this2.clickHandler.bind(_this2);
        _this2.step = 5;
        _this2.state = { currentValue: 0 };
        _this2.mainContainer = document.getElementsByClassName('main-container')[0];
        return _this2;
    }

    _createClass(Slider, [{
        key: 'clickHandler',
        value: function clickHandler(event) {
            switch (this.counter) {
                case 0:
                    setTimeout(changeValue.bind(this), 25, 50, 'plus');
                    this.slider.classList.add('slider-middle');
                    this.props.changeMainContainer('middle');
                    this.counter++;
                    break;
                case 1:
                    setTimeout(changeValue.bind(this), 25, 100, 'plus');
                    this.slider.classList.remove('slider-middle');
                    this.slider.classList.add('slider-last');
                    this.props.changeMainContainer('black');
                    this.counter++;
                    break;
                case 2:
                    setTimeout(changeValue.bind(this), 25, 50, 'minus');
                    this.slider.classList.remove('slider-last');
                    this.slider.classList.add('slider-middle');
                    this.props.changeMainContainer('middle');
                    this.counter++;
                    break;
                case 3:
                    setTimeout(changeValue.bind(this), 25, 0, 'minus');
                    this.slider.classList.remove('slider-middle');
                    this.props.changeMainContainer('white');
                    this.counter = 0;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement('input', { ref: function ref(_ref) {
                    if (_ref) _this3.slider = _ref;
                }, type: 'range', onClick: this.clickHandler, value: this.state.currentValue, className: 'slider' });
        }
    }]);

    return Slider;
}(React.Component);