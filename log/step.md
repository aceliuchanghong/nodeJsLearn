```nodejs
npm init
npm i express
```
```nodejs
npm i nodemon --dev
```
通常在开发过程中，当你对代码进行修改时，你需要手动停止和重新启动应用程序才能看到变化生效。nodemon 可以帮助你省去这一步骤，它会自动检测文件的变化并在发生改变时重新启动应用。
在你的项目中，通过将 nodemon 安装为开发依赖项（--dev），你可以确保这个工具仅在开发阶段使用，而不会被包含在生产环境中。
这是因为 nodemon 只是一个开发时的便利工具，不应该用于生产环境，生产环境通常使用其他方法来确保应用程序的稳定性和安全性

```nodejs
npm start
npm i morgan
```
morgan 是一个 HTTP 请求日志中间件，
用于记录应用程序接收到的 HTTP 请求的信息。它可以记录请求的信息，
例如请求方法、URL、响应状态码以及响应时间等。
```nodejs
npm i mongoose
```
mongoose 是一个 MongoDB 的对象模型工具，
它提供了在 Node.js 环境中与 MongoDB 数据库进行交互的方便方法。