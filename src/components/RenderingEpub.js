import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import ePub from "epubjs"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import {
	NavigateNext as Next,
	NavigateBefore as Prev,
} from "@material-ui/icons"

import eBook from "../assets/larsson-stieg-luftslottet-som-sprängdes.epub"
import { SAVE_TRANSLATED_TEXT } from "../state"

const ButtonContainerStyled = styled.div`
	display: flex;
	justify-content: space-between;
	order: 2;
	margin-top: 10px;
`

const RenderingEpub = () => {
	const [rendition, setRendition] = useState(null)
	const dispatch = useDispatch()

	useEffect(() => {
		const book = ePub(eBook)
		const renditionBook = book.renderTo("root", {
			width: 400,
			height: 800,
			flow: "paginated",
		})

		// eslint-disable-next-line
		renditionBook.themes.default({ ".calibre": { "font-size": "1.5em","border":"1px solid black" } })
		renditionBook.display()
		setRendition(renditionBook)
	}, [])

	const onSelectText = (contents) => {
		const selectedText = contents.window.getSelection().toString()
		const selectedWords = selectedText.split(" ")
		dispatch({ type: SAVE_TRANSLATED_TEXT, payload: selectedWords })
	}

	const prevPage = () => {
		rendition.prev()
	}

	const nextPage = () => {
		rendition.next()
	}
	if (rendition) {
		rendition.hooks.content.register((contents) => {
			const calibreClass = contents.documentElement.getElementsByClassName(
				"calibre"
			)
			if (calibreClass[0] !== undefined) {
				calibreClass[0].addEventListener(
					"mouseup",
					() => onSelectText(contents),
					false
				)
			}
		})
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

export default RenderingEpub
