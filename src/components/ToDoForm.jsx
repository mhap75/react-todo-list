import { useState } from "react";

const ToDoForm = (props) => {
	const [todo, setTodo] = useState("");

	const todoHandler = (e) => {
		setTodo(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();

		props.addTodo(todo);
		setTodo("");
	};

	return (
		<form className="flex my-3 gap-2 items-center" onSubmit={submitHandler}>
			<input
				type="text"
				onChange={todoHandler}
				className="rounded-md shadow-lg min-w-[50dvw] flex-1"
				value={todo}
				placeholder="enter your task..."
			/>
			<button
				type="submit"
				className="btn-primary shadow-lg"
				disabled={todo === ""}
			>
				Add
			</button>
		</form>
	);
};

export default ToDoForm;
