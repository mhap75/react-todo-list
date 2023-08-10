import { useState } from "react";
import Select from "react-select";

const options = [
	{ value: "all", label: "All" },
	{ value: "done", label: "completed" },
	{ value: "unDone", label: "uncompleted" },
];

const NavBar = (props) => {
	return (
		<header className="shadow-md bg-slate-100 py-1 rounded-md mt-5 px-3">
			<Select
				value={props.selected}
				options={options}
				className="mb-2"
				onChange={(e) => props.filterTodos(e)}
			/>
			{props.unCompleted === 0 ? (
				<p className="text-amber-600 font-bold">
					Congrats🥳! All tasks are done.
				</p>
			) : (
				<h2 className="text-xl">{props.unCompleted} remaining tasks</h2>
			)}
		</header>
	);
};

export default NavBar;
