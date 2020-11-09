const { useState, useEffect } = React;

const previewText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png)
`;

const App = (props) => {
	const [editorText, setEditorText] = useState(previewText);
	// const __html = marked("# Marked in Node.js\n\nRendered by **marked**.");
	const makeMarkup = () => {
		return { __html: marked(editorText) };
	};

	const handleEditorText = (event) => {
		setEditorText(event.target.value);
	};

	return (
		<div className="App">
			<h1 className="App-title">Free Code Camp - Markdown Previwer</h1>
			<div className="App-converter-container">
				<div className="App-left-box">
					<div className="App-editor-label">Editor</div>
					<textarea
						onChange={handleEditorText}
						name="editorText"
						value={editorText}
						className="App-textarea"
						id="editor"
					></textarea>
				</div>
				<div className="App-right-box">
					<div className="App-preview-label">Preview</div>
					<div
						className="App-preview-panel"
						dangerouslySetInnerHTML={makeMarkup()}
						id="preview"
					></div>
				</div>
			</div>

			{/* <<p>{editorText}</p> */}
			{/* <div dangerouslySetInnerHTML={makeMarkup()}></div> */}
		</div>
	);
};

// ======================

ReactDOM.render(<App />, document.getElementById("root"));
