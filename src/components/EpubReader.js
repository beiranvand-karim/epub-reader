import React from "react"
import { EpubView } from "react-reader"

import book from "../assets/Sway.epub"

const EpubReader = () => {
	return (
		<div style={{ position: "relative", height: "100%" }}>
			<EpubView
				url={book}
				locationChanged={(epubcifi) => console.log("location", epubcifi)}
				tocChanged={(toc) => console.log("toc", toc)}
				title={"sway"}
				getRendition={(e) => console.log(e)}
			/>
		</div>
	)
}
export default EpubReader
