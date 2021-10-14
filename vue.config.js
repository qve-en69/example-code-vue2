module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: 'http://www.thecocktaildb.com/',
                changeOrigin: true
            }
        }
    }
}