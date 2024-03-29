import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Add.scss';
function Add() {
	let navigate = useNavigate();
	const [userInfo, setuserInfo] = useState({
		title: '',
	});
	const onChangeValue = (e) => {
		setuserInfo({
			...userInfo,
			[e.target.name]: e.target.value,
		});
	};

	let editorState = EditorState.createEmpty();
	const [description, setDescription] = useState(editorState);
	const onEditorStateChange = (editorState) => {
		setDescription(editorState);
		console.log(userInfo.description.value);
	};
    console.log(description)
	const [isError, setError] = useState(null);
	const addDetails = async (event) => {
		try {
			event.preventDefault();
			event.persist();
			if (userInfo.description.value.length < 50) {
				setError(
					'Required, Add description minimum length 50 characters'
				);
				return;
			}
			axios
				.post(`http://localhost:8080/addArticle`, {
					title: userInfo.title,
					description: userInfo.description.value,
				})
				.then((res) => {
					if (res.data.success === true) {
						navigate('/');
					}
				});
		} catch (error) {
			throw error;
		}
	};

	return (
		<>
			<div className="add">
				<div className="add__container">
					<div className="add__row">
						<form onSubmit={addDetails} className="update__forms">
							<h3 className="myaccount-content"> Add </h3>
							<div className="">
								<div className="">
									<label className="font-weight-bold">
										Title
										<span className="required"></span>
									</label>
									<input
										type="text"
										name="title"
										value={userInfo.title}
										onChange={onChangeValue}
										className="form-control"
										placeholder="Title"
										required
									/>
								</div>
								{/* <div className="">
									<label className="font-weight-bold">
										Sort Description
										<span className="required"></span>
									</label>
									<input
										type="text"
										name="title"
										value={userInfo.title}
										onChange={onChangeValue}
										className="form-control"
										placeholder="Title"
										required
									/>
								</div> */}
								<div className="">
									<label className="">
										Description
										<span className="required"></span>
									</label>

									<Editor
										editorState={description}
										toolbarClassName="toolbarClassName"
										wrapperClassName="wrapperClassName"
										editorClassName="editorClassName"
										onEditorStateChange={
											onEditorStateChange
										}
									/>
									<textarea
										style={{ display: 'none' }}
										disabled
										ref={(val) =>
											(userInfo.description = val)
										}
										value={draftToHtml(
											convertToRaw(
												description.getCurrentContent()
											)
										)}
									/>
								</div>
								{isError !== null && (
									<div className="errors"> {isError} </div>
								)}
								<div className="">
									<button
										type="submit"
										className="btn btn-primary"
									>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="previev">
					<div
						className="post__description"
						dangerouslySetInnerHTML={{
							__html: userInfo?.description?.value,
						}}
					/>
				</div>
			</div>
		</>
	);
}
export default Add;
