import { AiTwotoneDelete } from "react-icons/ai";

function TodoItem({ todoName, todoDate,onDeleteClick }) {
    return (
      <div className="container text-center">
        <div className="row input-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger input-button" onClick={() => onDeleteClick(todoName)}>
            <AiTwotoneDelete />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;