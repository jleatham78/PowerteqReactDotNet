import '../../../src/index.css';

function Todo({ todo, deleteTodo }) {
    
    return (
        <div className="todo">
        {todo.text}
            
        <button onClick={() => deleteTodo(todo)}>Delete</button>
        </div>
    );
};


export default Todo;