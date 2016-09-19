
module.exports = {


    entry:"./src/index.tsx",

    output:{
        filename: "./dist/bundle.js"
    },
    // enable sourcemaps for debugging webpack's output
    devtool:"sourcemap",

    resolve:{
        extensions:[
            "",
            ".webpack.js",
            ".web.js",
            ".ts",
            ".tsx",
            ".js"
        ]
    },
    module:{

        loaders:[

            {test : /\.tsx?$/, loader : "ts-loader" }
        ],

        preLoaders:[

            {test : /\.js/,loader:'source-map-loader'}
        ],

        externals:{
            "react":"React",
            "react-dom":"ReactDOM"
        }


    }


};