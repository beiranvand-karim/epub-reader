import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import ePub from "epubjs"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import {
	NavigateNext as Next,
	NavigateBefore as Prev,
} from "@material-ui/icons"

import { GlobalStyle } from "./style"
import eBook from "./assets/larsson-stieg-luftslottet-som-sprängdes.epub"

const ButtonContainerStyled = styled.div`
	display: flex;
	justify-content: space-between;
	order: 2;
	margin-top: 10px;
`

const App = () => {
	const [rendition, setRendition] = useState(null)

	useEffect(() => {
		const book = ePub(eBook)
		const renditionBook = book.renderTo("root", {
			width: 400,
			height: 800,
			flow: "paginated",
		})
		// eslint-disable-next-line
		renditionBook.themes.default({ ".calibre": { "font-size": "1.5em" } })
		renditionBook.display()
		setRendition(renditionBook)
	}, [])

	const prevPage = () => {
		rendition.prev()
	}

	const nextPage = () => {
		rendition.next()
	}

	return (
		<ButtonContainerStyled className="app">
			<Button onClick={prevPage} variant="contained" color="primary">
				<Prev />
			</Button>
			<Button onClick={nextPage} variant="contained" color="primary">
				<Next />
			</Button>
		</ButtonContainerStyled>
	)
}

ReactDOM.render(
	<React.Fragment>
		<GlobalStyle />
		<App />
	</React.Fragment>,
	document.getElementById("root")
)
