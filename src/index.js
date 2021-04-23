import React from "react"
import ReactDOM from "react-dom"

import EpubReader from "./components/EpubReader"
import { GlobalStyle } from "./style"

const App = () => {
	return (
		<div className="App">
			<EpubReader />
		</div>
	)
}

ReactDOM.render(
	<React.Fragment>
		<GlobalStyle />
		<App />
	</React.Fragment>,
	document.getElementById("root")
)
