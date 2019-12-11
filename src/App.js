import React, { useState, createContext, useContext, useReducer, useCallback, useMemo } from "react";
/**
 * @description AddTodoBtn component
 * @return html
 */
const AddTodoBtn = () => {
  const dispatch = useContext(TodosApi);
  return (
    <div className="action-add">
      <button onClick={() => dispatch({ type: "add", todo: 'go to gym' })}>Add new todo</button>
    </div>
    )
  };
  /**
   * @description RemoveAllBtn component
   * @return html
   */
  const RemoveAllBtn = () => {
    const dispatch = useContext(TodosApi);
    
    return (
      <div className="action-remove-all">
        <button onClick={() => dispatch({ type: "removeAll", todos: [] })}>Remove all todos</button>
      </div>
  );
};

/**
 * @description Actions component
 * @return html
 */
const Actions = () => (
  <div className="actions-container">
    <AddTodoBtn />
    <RemoveAllBtn />
    //...more actions
  </div>
);

/**
 * @description MenuOnTop component
 * @return html
 */

const MenuOnTop = () => {
  const [dispatch, state] = useReducer(dispatch, state)
  return (
    <div className="menu-on-top">
      <Actions />
      <img src="data:image/jpeg;base64,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" />
      <div>{state.map((todo) => todo )}</div>
  </div>
  );

};

/**
 * @description TodoList component
 * @return html
 */
const TodosApi = createContext({ todos: ['firsttodo', 'secondtodo'] });
const reducer = (state, action) => {
  debugger;
  switch (action.type) {
    case "add":
      return { todos: [...state.todos, action.todo] };
    case "removeAll":
      return { todos: [] };
    default:
      return state;
  }
}; 

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer);
  //const [todos, setTodos] = useState([]); //[{someValue: 'value1'}, {someValue: 'value2'}, {someValue: 'value3')}]
  // const addTodo = useCallback(() => setTodos(prevTodos => [...prevTodos, {}]));
  // const removeAll = useCallback(() => setTodos([]), []);

  // const getApi = useMemo(() => ({ addTodo, removeAll }), []);

  return (
    <div className="todo-list">
      <TodosApi.Provider value={dispatch, state}>
        <MenuOnTop />
        //...state.todos
      </TodosApi.Provider>
    </div>
  );
};

export default TodoList;
