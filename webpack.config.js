const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module:{
        rules:[
            {
                test:/\.js$/i,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader",
                }
            },
            {
                test: /\.html/i,
                use:[
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,

                        }
                    } 
                ]
            }
        ],
    },
    
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            file: "./index.html",
        })
    ]
}