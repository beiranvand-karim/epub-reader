import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./state"
import { GlobalStyle } from "./style"
import { StylesProvider } from "@material-ui/core/styles"
import RenderingEpub from "./components/RenderingEpub"
import TranslatedContent from "./components/TranslatedContent"

const App = () => {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<StylesProvider injectFirst>
				<RenderingEpub />
				<TranslatedContent />
			</StylesProvider>
		</Provider>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
