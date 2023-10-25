import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import './Editor.scss'
import { Input } from '@chakra-ui/react';
const Example = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');
	console.log(content)
	return (
		<main className="editor">
			<span dangerouslySetInnerHTML={{ __html: content }} />
			<div className="input-item">
				<label htmlFor="title">Title</label>
				<Input type="text" width={'100%'} />
				<label htmlFor="title">Description</label>
				<Input type="text" width={'100%'} px={'5px'} />
				<label htmlFor="title">Background Image</label>
				<Input type="file" width={'100%'} />
				<label htmlFor="title">Post Content</label>
			</div>

			<JoditEditor
				ref={editor}
				value={content}
				tabIndex={1} // tabIndex of textarea
				onChange={(newContent) => setContent(newContent)}
			/>
		</main>
	);
};
export default Example;
