import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import axios from "axios"

const TextContainer = styled.div`
	width: 400px;
	height: 800px;
	font-size: 1.5em;
	background-color: #f6ea7bff;
	order: 3;
	border: 1px solid black;
	direction: ltr;
	font-family: Berling Antiqua, serif;
	position: absolute;
	left: 1000px;
`

const TranslatedContent = () => {
	const selectedWords = useSelector((selectedWords) => selectedWords)

	// eslint-disable-next-line
	const translatedWords = useState(null)

	useEffect(() => {
		if (selectedWords) {
			axios
				.get(
					`https://folkets-lexikon.csc.kth.se/folkets/folkets.en.html#lookup&` +
						selectedWords[0] +
						`&1`
				)
				.then((response) => {
					// handle success
					console.log(response)
				})
		}
	})

	return selectedWords ? (
		<TextContainer className="text-container">
			{selectedWords && selectedWords.map((word) => <p>{word}</p>)}
		</TextContainer>
	) : (
		<TextContainer>please select a text</TextContainer>
	)
}

export default TranslatedContent
