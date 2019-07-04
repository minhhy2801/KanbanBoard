const fs = require('fs')

if (fs.existsSync('src/configView/config.html')) {
    if (!fs.existsSync('dist/html')) fs.mkdirSync('dist/html')
    fs.copyFileSync('src/configView/config.html','dist/html/config.html')
}