const Todolist = ({ todolist, editMode, handleEdit, handleDelete }) => {
  return (
    <ul className="todo-list">
      {
        todolist.map((item, index) =>
          <li key={item.id} id={item.id} className={editMode ? 'edit' : ''}>
            <span>{item.name}</span>
            <button className="btn" type="submit" onClick={() => { handleEdit(item) }}> Edit</button>
            <button className="btn" type="submit" onClick={() => { handleDelete(item.id) }}> Delete</button>
          </li>
        )
      }

    </ul>
  )
}

export default Todolist;