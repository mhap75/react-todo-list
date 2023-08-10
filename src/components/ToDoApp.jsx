import { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import NavBar from "./NavBar";

const ToDoApp = () => {
	const [todos, setTodos] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [value, setValue] = useState({ value: "all", label: "All" });

	useEffect(() => {
		filterHandler(value);
	}, [todos, value]);

	const addTodoHandler = (input) => {
		const newTodo = {
			id: Math.floor(Math.random() * 10000),
			text: input,
			isDone: false,
			isEditing: false,
		};
		setTodos([...todos, newTodo]);
	};

	const doneHandler = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const selected = { ...todos[index] };
		selected.isDone = !selected.isDone;
		const updatedTodos = [...todos];
		updatedTodos[index] = selected;
		setTodos(updatedTodos);
	};

	const editHandler = (id, input) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const selected = { ...todos[index] };
		selected.text = input;
		selected.isEditing = !selected.isEditing;
		const updatedTodos = [...todos];
		updatedTodos[index] = selected;
		setTodos(updatedTodos);
	};

	const isEditingHandler = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const selected = { ...todos[index] };
		selected.isEditing = !selected.isEditing;
		const updatedTodos = [...todos];
		updatedTodos[index] = selected;
		setTodos(updatedTodos);
	};

	const deleteHandler = (id) => {
		const updatedTodo = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodo);
	};

	const filterHandler = (status) => {
		setValue(status);
		switch (status.value) {
			case "done":
				setFiltered(todos.filter((todo) => todo.isDone));
				break;
			case "unDone":
				setFiltered(todos.filter((todo) => !todo.isDone));
				break;
			default:
				setFiltered(todos);
				break;
		}
	};

	return (
		<div className="container mx-auto flex items-center flex-col">
			<NavBar
				unCompleted={todos.filter((todo) => !todo.isDone).length}
				filterTodos={filterHandler}
				selected={value}
			/>
			<ToDoForm addTodo={addTodoHandler} />
			<ToDoList
				todos={filtered}
				onEdit={editHandler}
				onDelete={deleteHandler}
				onDone={doneHandler}
				onEditing={isEditingHandler}
			/>
		</div>
	);
};

export default ToDoApp;
