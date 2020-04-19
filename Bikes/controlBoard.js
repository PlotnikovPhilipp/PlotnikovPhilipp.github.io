var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* 

    Create the class ControlBoard

*/
var listOfColors = [{ key: 'pink', color: '#FF3FA7', img: 'pink_rama.png', isBorder: false }, { key: 'red', color: '#FF2217', img: 'red_rama.png', isBorder: false }, { key: 'salat', color: '#11FF0B', img: 'salat_rama.png', isBorder: false }, { key: 'brown', color: '#F5B57F', img: 'brown_rama.png', isBorder: false }, { key: 'green', color: '#005414', img: 'green_rama.png', isBorder: false }, { key: 'blue', color: '#3FBCEF', img: 'blue_rama.png', isBorder: false }, { key: 'orange', color: '#EF4807', img: 'orange_rama.png', isBorder: false }, { key: 'black', color: '#000000', img: 'black_rama.png', isBorder: false }, { key: 'white', color: '#FFFFFF', img: 'white_rama.png', isBorder: true }, { key: 'darkCherry', color: '#78122D', img: 'darkCherry_rama.png', isBorder: false }, { key: 'golden', color: '#E6A80E', img: 'golden_rama.png', isBorder: false }, { key: 'chrome', color: '#7C7276', img: 'chrome_rama.png', isBorder: false }, { key: 'purple', color: '#3D107B', img: 'purple_rama.png', isBorder: false }, { key: 'cyan', color: '#0E3985', img: 'cyan_rama.png', isBorder: false }];

var listOfSizes = [{ key: 'xs', size: 'xs' }, { key: 's', size: 's' }, { key: 'm', size: 'm' }, { key: 'l', size: 'l' }];

export var ControlBoard = function (_React$Component) {
    _inherits(ControlBoard, _React$Component);

    function ControlBoard(props) {
        _classCallCheck(this, ControlBoard);

        var _this = _possibleConstructorReturn(this, (ControlBoard.__proto__ || Object.getPrototypeOf(ControlBoard)).call(this, props));

        _this.currentColor = null;
        _this.handlerSelector = _this.handlerSelector.bind(_this);
        // Color buttons
        _this.colorButtons = [];

        var _loop = function _loop(i) {
            _this.colorButtons.push(React.createElement(
                'li',
                { className: 'container-of-color-button', key: listOfColors[i].key },
                React.createElement('div', { ref: function ref(_ref) {
                        if (listOfColors[i].key == 'black') if (_ref) _this.currentColor = _ref;
                    }, className: 'color-button-selector' }),
                React.createElement('div', { onClick: function onClick(event) {
                        _this.handlerSelector(event);_this.props.changeConstructorImg(event.currentTarget.dataset.img);
                    }, 'data-img': './imgs/' + listOfColors[i].img, style: { backgroundColor: listOfColors[i].color, border: listOfColors[i].isBorder ? '0.1vw solid black' : 'none' }, className: 'color-button' })
            ));
        };

        for (var i = 0; i < 14; i++) {
            _loop(i);
        }

        // Size buttons
        _this.sizeButtons = [];
        for (var i = 0; i < 4; i++) {
            _this.sizeButtons.push(React.createElement(
                'li',
                { className: 'size-button', key: listOfSizes[i].key },
                React.createElement(
                    'span',
                    null,
                    listOfSizes[i].size
                )
            ));
        }
        return _this;
    }

    _createClass(ControlBoard, [{
        key: 'handlerSelector',
        value: function handlerSelector(event) {
            this.currentColor.style.display = 'none';
            this.currentColor = event.currentTarget.previousElementSibling;
            this.currentColor.style.display = 'block';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'section',
                { className: 'control-board' },
                React.createElement(
                    'h4',
                    null,
                    '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B:'
                ),
                React.createElement(
                    'section',
                    { className: 'color-section' },
                    React.createElement(
                        'h5',
                        null,
                        '\u0426\u0432\u0435\u0442:'
                    ),
                    React.createElement(
                        'ul',
                        { className: 'general-color-container' },
                        this.colorButtons
                    )
                ),
                React.createElement(
                    'section',
                    { className: 'size-section' },
                    React.createElement(
                        'h5',
                        null,
                        '\u0420\u0430\u0437\u043C\u0435\u0440:'
                    ),
                    React.createElement(
                        'ul',
                        { className: 'general-size-container' },
                        this.sizeButtons
                    )
                )
            );
        }
    }]);

    return ControlBoard;
}(React.Component);