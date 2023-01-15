const path = require("path")
const webpack = require("webpack")

const environment = process.env.ENVIRONMENT

console.log("environment:::::", environment)

let ENVIRONMENT_VARIABLES = {
	"process.env.ENVIRONMENT": JSON.stringify("development"),
	"process.env.PORT": JSON.stringify("3080"),
	"process.env.MONGO_CONNECTION_STRING": JSON.stringify(
		"mongodb+srv://shakyankushwaha:9ZA2EurguW0ODL1w@mern-websites.rgcpaj5.mongodb.net/todos?retryWrites=true&w=majority"
	)
}

if (environment === "test") {
	ENVIRONMENT_VARIABLES = {
		"process.env.ENVIRONMENT": JSON.stringify("test"),
		"process.env.PORT": JSON.stringify("3080"),
		"process.env.MONGO_CONNECTION_STRING": JSON.stringify(
			"mongodb+srv://shakyankushwaha:9ZA2EurguW0ODL1w@mern-websites.rgcpaj5.mongodb.net/todos?retryWrites=true&w=majority"
		)
	}
} else if (environment === "production") {
	ENVIRONMENT_VARIABLES = {
		"process.env.ENVIRONMENT": JSON.stringify("production"),
		"process.env.PORT": JSON.stringify("80"),
		"process.env.MONGO_CONNECTION_STRING": JSON.stringify(
			"mongodb://webapp-mongo:7PtungzvxxQnHp8XFOrVrhNkOTLm847Hw3OHnkeHgvtC0eiNJlt5NukvXIPXuvEjUL98SchoVtZlHlg15CEBgg==@webapp-mongo.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@webapp-mongo@"
		)
	}
}

module.exports = {
	entry: "./server.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "api.bundle.js"
	},
	target: "node",
	plugins: [new webpack.DefinePlugin(ENVIRONMENT_VARIABLES)]
}
