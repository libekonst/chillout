import { Strings } from '../static/strings';

/**
 * Performs a side-effect to change the document.title property, displayed on the window tab.
 * Uses a default title and appends the input text, if provided.
 */
export const setDocumentTitle = (additionalText?: string) => {
	document.title = makeDocumentTitle(additionalText);
};

const makeDocumentTitle = (text?: string) =>
	text ? concatWithDash(Strings.WINDOW_TITLE, text) : Strings.WINDOW_TITLE;

const concatWithDash = (base: string, input: string) => `${base} - ${input}`;
