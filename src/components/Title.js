import React, { useRef, useReducer, useState } from 'react';

// ADD_TODO
// CLEAR_COMPLETED_TODOS
// MARK_TODO_COMPLETED

const titleReducer = (state, action) => {
  switch (action.type) {
    case 'START_EDITING':
      return {
        ...state,
        editing: true,
      };
    case 'CHANGE_TITLE':
      return {
        ...state,
        editing: false,
        title: action.payload.text,
      };
    default:
      return state;
  }
};

const initialState = {
  editing: false,
  title: 'Change me',
};
// REDUX
function Title() {
  const [state, dispatch] = useReducer(titleReducer, initialState);
  const inputRef = useRef();

  const onClick = () => {
    dispatch({
      type: 'CHANGE_TITLE',
      payload: {
        text: inputRef.current.value,
      },
    });
  };

  const onClickIcon = () => {
    // setEditing(false);
    dispatch({ type: 'START_EDITING' });
  };

  console.log(state);

  return (
    <div>
      {state.editing ? (
        <div>
          <input
            ref={inputRef}
            className="title-input"
            type="text"
            name="newTitleText"
          />
          <button onClick={onClick}>Update title</button>
        </div>
      ) : (
        <h1>
          {state.title} <i onClick={onClickIcon} className="far fa-edit" />
        </h1>
      )}
    </div>
  );
}

export default Title;
