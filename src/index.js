import React from "react"
import ReactDOM from "react-dom"
import { GlobalStyle } from "./style"

const App = () => {
	return <div className="App"></div>
}

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)
