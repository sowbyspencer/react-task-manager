import React, { useState } from "react";

function TaskForm({ addTask }) {
  /* The code `const [title, setTitle] = useState('');` and `const [description,
  setDescription] = useState('');` are using the `useState` hook in React to
  declare two state variables, `title` and `description`, and their
  corresponding setter functions, `setTitle` and `setDescription`. */
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  /**
   * The handleSubmit function prevents the default form submission behavior,
   * retrieves the values of the task title and description inputs, and displays an
   * alert with the title and description.
   * @param event - The event parameter is the event object that is passed to the
   * function when the form is submitted. It contains information about the event,
   * such as the target element (the form that was submitted) and the values of the
   * form inputs.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) {
      // Handle error (e.g., display a message)
      return;
    }
    addTask(title, description);
    setTitle('');
    setDescription('');
  };

  /**
   * The `InputField` function is a React component that renders an input field
   * with a label.
   */
  const InputField = ({ id, label, value }) => (
    <div style={styles.inputField}>
      <label htmlFor={id} style={styles.label}>
        {label}
      </label>
      <input type="text" id={id} defaultValue={value} style={styles.input} />
    </div>
  );

  /**
   * The `TextAreaField` function is a React component that renders a textarea
   * input field with a label.
   */
  const TextAreaField = ({ id, label, value }) => (
    <div style={styles.inputField}>
      <label htmlFor={id} style={styles.label}>
        {label}
      </label>
      <textarea id={id} defaultValue={value} style={styles.textarea} />
    </div>
  );

  /* The `return` statement is returning a JSX element that represents a form. The
  form has an `onSubmit` event handler set to the `handleSubmit` function.
  Inside the form, there are three components: `InputField`, `TextAreaField`,
  and a button. */
  return (
    <aside id="taskAddition" style={styles.taskAddition}>
      <h2 style={styles.h2}>Add New Task</h2>
      <form id="addTaskForm" style={styles.form}>
        <input type="text" id="taskTitle" placeholder="Task Title" required="" style={styles.input}></input>
        <br></br>
        <textarea id="taskDescription" placeholder="Task Description" style={styles.textarea}></textarea>
        <br></br>
        <button type="submit" style={styles.button}>Add Task</button>
      </form>
    </aside>
  );
}

const styles = {
  taskAddition: {
    width: '30%',
    backgroundColor: "#e9ecef",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "20px",
    boxSizing: 'border-box',
  },
  h2: {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  form: {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    marginBottom: '10px',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    resize: 'vertical',
    marginBottom: '10px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    boxSizing: 'border-box',
  }
};

export default TaskForm;
