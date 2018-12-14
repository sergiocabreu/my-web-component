const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/my-web-component/polyfills.js',
        './dist/my-web-component/runtime.js',
        './dist/my-web-component/main.js'
    ]
    
    await fs.ensureDir('dist-web-element')
    
    await concat(files, 'dist-web-element/custom-web-element.js')
    console.info('Angular Elements created successfully!')

})()