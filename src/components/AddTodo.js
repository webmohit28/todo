const AddTodo = ({ handleSubmit, todo, editMode, setTodo }) => {
  return (
    <form className="add-item" onSubmit={handleSubmit}>
      <input type="text" className="form-control" value={todo} placeholder='add Item' onChange={(e) => setTodo(e.target.value)} />
      <button className="btn" type="submit">{editMode ? 'edit' : 'Submit'} </button>
    </form>
  )
}

export default AddTodo;