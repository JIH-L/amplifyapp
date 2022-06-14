import Todo from "./../components/Todo";

function TodoPages() {
    return (
        <div>
            <h1>My Todos</h1>
            <Todo text="Learn React" />
            <Todo text="React" />
            <Todo text="For React" />
        </div>
    );
}

export default TodoPages;