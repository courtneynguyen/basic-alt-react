var path = require('path');
module.exports = {
    entry: "./src/Index",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               loader: "babel-loader",
					include: path.join(__dirname, 'src'),
					query: {
						presets: ['react', 'es2015']
					}
            },
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					loader: "babel",
					include: path.join(__dirname, 'src'),
					query: {
						presets: ['react', 'es2015']
					}
				}
        ]
    }
};
