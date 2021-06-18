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
		<li
			className="list-group-item d-flex justify-content-between align-items-center"
			key={index}
			onMouseEnter={e => {
				e.target.querySelector("button").style.display = "block";
			}}
			onMouseLeave={e => {
				e.target.querySelector("button").style.display = "none";
			}}>
			{item}

			<button
				style={{ display: "none" }}
				type="button"
				className="btn btn-link"
				onClick={e => {
					let resul = list.filter((e, i) => {
						return i !== index;
					});
					setList(resul);
				}}>
				<i className="fas fa-times" style={{ color: "red" }}></i>
			</button>
		</li>
	));

	return (
		<div className="container">
			<h1>todos</h1>
			<div className="row">
				<div className="col-lg">
					<div>
						<div className="input-group mb-3">
							<input
								type="text"
								onChange={e => {
									setValue(e.target.value);
								}}
								onKeyPress={e => {
									if (e.key === "Enter") {
										if (inputValue != "") {
											setList([...list, inputValue]);
										}
									}
								}}
								className="form-control"
								placeholder="What's need to be done?"
								aria-label="Recipient's username"
								aria-describedby="button-addon2"
							/>
						</div>
						<ul className="list-group">{lis}</ul>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							{lis.length} item left
						</li>
					</div>
				</div>
			</div>
		</div>
	);
};
