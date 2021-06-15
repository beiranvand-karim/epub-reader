import { createStore } from "redux"

export const SAVE_TRANSLATED_TEXT = "SAVE_TRANSLATED_TEXT"

export const store = createStore((state, { type, payload }) => {
	switch (type) {
		case SAVE_TRANSLATED_TEXT:
			return (state = payload)
		default:
			return state
	}
}, null)

export default store
