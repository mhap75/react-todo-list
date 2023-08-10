import { TiTick } from "react-icons/ti";
import { IconContext } from "react-icons";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useState } from "react";

const ToDoList = (props) => {
	const [input, setInput] = useState("");

	const editHandler = (id, text) => {
		setInput(text);
		props.onEdit(id, input);
		setInput("");
	};

	const isEditingHandler = (id) => {
		props.onEditing(id);
	};

	return (
		<div className="w-full space-y-4 px-5">
			<IconContext.Provider value={{ size: "1.2rem" }}>
				{props.todos.map((todo) => (
					<div
						key={todo.id}
						className={`flex justify-between  py-2 px-4 rounded-md items-center shadow ${
							todo.isDone ? "bg-green-200" : "bg-blue-200"
						}`}
					>
						<div className="flex items-center gap-1">
							{todo.isDone && (
								<span className="text-green-600">
									<IoCheckmarkDoneCircleSharp />
								</span>
							)}
							<h4 className="font-bold">
								{todo.isEditing ? (
									<form
										onSubmit={(e) => {
											e.preventDefault();
											editHandler(todo.id, todo.text);
										}}
									>
										<input
											type="text"
											defaultValue={todo.text}
											onChange={(e) =>
												setInput(e.target.value)
											}
										/>
									</form>
								) : (
									todo.text
								)}
							</h4>
						</div>
						<div className="flex gap-2">
							{!todo.isDone && (
								<button
									onClick={() =>
										todo.isEditing
											? editHandler(todo.id, input)
											: isEditingHandler(todo.id)
									}
									className="btn-primary shadow"
								>
									{todo.isEditing ? "update" : "edit"}
								</button>
							)}
							<button
								onClick={() => props.onDelete(todo.id)}
								className="btn-danger shadow"
							>
								delete
							</button>
							<button
								onClick={() => props.onDone(todo.id)}
								className="btn-success shadow"
							>
								<TiTick />
							</button>
						</div>
					</div>
				))}
			</IconContext.Provider>
		</div>
	);
};

export default ToDoList;
