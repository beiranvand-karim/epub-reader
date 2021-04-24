import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { GlobalStyle } from "./style"
import ePub from "epubjs"
import styled from "styled-components"

import eBook from "./assets/Larsson, Stieg - Luftslottet som sprängdes-2.epub"
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
	const [rendition, setRendition] = useState(null)

	useEffect(() => {
		const book = ePub(eBook)
		const renditionBook = book.renderTo("root", {
			width: 800,
			height: 800,
			flow: "paginated",
		})
		renditionBook.display()
		setRendition(renditionBook)
		// eslint-disable-next-line
	}, [0])

	const prevPage = () => {
		rendition.prev()
	}

	const nextPage = () => {
		rendition.next()
	}

	return (
		<Container className="app">
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
