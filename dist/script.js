function EnterName(props) {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("form", { id: "input-name", onSubmit: props.subName }, /*#__PURE__*/
    React.createElement("h1", null, "To-Do List"), /*#__PURE__*/
    React.createElement("input", { type: "text", name: "name", placeholder: "Enter Your Name", class: "submit-name", required: true }), /*#__PURE__*/
    React.createElement("input", { type: "submit", value: "Submit", class: "submit-button" }))));



}

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      has_name: false,
      tasks: [] };


    this.submitName = this.submitName.bind(this);
    this.resetName = this.resetName.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  submitName(e) {
    e.preventDefault();
    this.setState({
      name: e.target.name.value,
      has_name: true });

  }

  resetName() {
    this.setState({
      name: "",
      has_name: false });

  }

  addTask(e) {
    e.preventDefault();
    this.setState(state => ({
      tasks: [...state.tasks, { id: Date.now(), val: e.target.task.value }] }));

  }

  removeTask(e) {
    e.preventDefault();
    document.getElementById(e.target.children[0].id).remove;
    this.setState(state => ({
      tasks: state.tasks.filter(val => val.id != e.target.children[0].id) }));

  }

  render() {
    if (this.state.has_name) {
      return /*#__PURE__*/(
        React.createElement("div", null, /*#__PURE__*/
        React.createElement("form", { id: "change-name", onSubmit: this.resetName }, /*#__PURE__*/
        React.createElement("h1", { id: "name-header" }, this.state.name, "'s Tasks"), /*#__PURE__*/
        React.createElement("input", { type: "submit", value: "Change Name", class: "change-name" })), /*#__PURE__*/

        React.createElement("br", null), /*#__PURE__*/
        React.createElement("form", { id: "new-task", onSubmit: this.addTask }, /*#__PURE__*/
        React.createElement("input", { type: "text", name: "task", placeholder: "Task Information", class: "task-field", required: true }), /*#__PURE__*/
        React.createElement("input", { type: "submit", value: "Add Task", class: "task-button" })), /*#__PURE__*/

        React.createElement("ul", null,
        this.state.tasks.map((t) => /*#__PURE__*/
        React.createElement("form", { onSubmit: this.removeTask }, /*#__PURE__*/
        React.createElement("li", { id: t.id }, /*#__PURE__*/React.createElement("input", { type: "submit", value: "X", class: "delete-button" }), t.val))))));





    } else {
      return /*#__PURE__*/(
        React.createElement("div", null, /*#__PURE__*/
        React.createElement(EnterName, { subName: this.submitName })));


    }
  }}


ReactDOM.render( /*#__PURE__*/React.createElement(ToDo, null), document.getElementById("toDo"));