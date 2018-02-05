const path = require('path')

const hook = require('css-modules-require-hook')
const projectDir = path.resolve(__dirname)

hook({
    generateScopedName: '[name]_[local]__[hash:base64:5]',
    rootDir: projectDir
})

require('./server')