import React, { useState, useDebugValue } from "react";

export const ToDoList = props => {
	const [inputValue, setValue] = useState("");
	const [list, setList] = useState([
		"Make the bed",
		"Wash my hands",
		"Eat",
		"Walk the dog"
	]);

	var lis = list.map((item, index) => (
		<li key={index}>
			{item}
			<button
				onClick={e => {
					list.filter(actual => {
						return (
							event.target.parentElement.innerText !==
							event.target.parentElement.innerText
						);
					});
				}}>
				Delete
			</button>
		</li>
	));

	return (
		<div>
			<div className="input-group mb-3">
				<input
					type="text"
					onChange={e => {
						setValue(e.target.value);
					}}
					className="form-control"
					placeholder="What's need to be done?"
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
					value={inputValue}
				/>
				<div className="input-group-append">
					<button
						onClick={e => {
							//let narray = list;
							//narray.push(inputValue);
							//setList(narray);

							setList([...list, inputValue]);
						}}
						className="btn btn-outline-secondary"
						type="button"
						id="button-addon2">
						Button
					</button>
				</div>
			</div>
			<ul>{lis}</ul>
			<p>{list.length} item left</p>
		</div>
	);
};
