import React from "react"
import ReactDOM from "react-dom"
import { GlobalStyle } from "./style"
import ePub from "epubjs"
import styled from "styled-components"

import eBook from "./assets/Sway.epub"
import { Button, Container } from "@material-ui/core"

const ButtonNextPageStyled = styled(Button)`
	position: absolute;
	bottom: 16px;
	right: 16px;
`

const ButtonPrevPageStyled = styled(Button)`
	position: absolute;
	bottom: 16px;
	left: 16px;
`

const App = () => {
	const book = ePub(eBook)
	const rendition = book.renderTo("root", {
		width: 1000,
		height: 1000,
		flow: "scrolled-doc",
	})
	rendition.display()

	const prevPage = () => {
		rendition.prev()
	}

	const nextPage = () => {
		rendition.next()
	}

	return (
		<Container className="App">
			<ButtonPrevPageStyled
				onClick={prevPage}
				variant="contained"
				color="primary"
			>
				prev
			</ButtonPrevPageStyled>
			<ButtonNextPageStyled
				onClick={nextPage}
				variant="contained"
				color="primary"
			>
				next
			</ButtonNextPageStyled>
		</Container>
	)
}

ReactDOM.render(
	<React.Fragment>
		<GlobalStyle />
		<App />
	</React.Fragment>,
	document.getElementById("root")
)
