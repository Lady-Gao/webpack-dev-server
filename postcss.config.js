let postcssPxToViewport = require('postcss-px-to-viewport');

module.exports = {
    plugins: [
        require('postcss-px-to-viewport')({
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false
        })
    ]
}
console.log(3)