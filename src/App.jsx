import { Fragment } from "react";
import ToDoApp from "./components/ToDoApp";
import Wrapper from "./components/hoc/Wrapper";

function App() {
	return (
		<Fragment>
			<ToDoApp />
		</Fragment>
	);
}

export default Wrapper(App, "bg-slate-200 h-screen");
