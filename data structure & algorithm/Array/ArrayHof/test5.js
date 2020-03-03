let todos = [
  {
    id: 3,
    content: "HTML",
    completed: false,
  },
  {
    id: 2,
    content: "CSS",
    completed: true,
  },
  {
    id: 1,
    content: "Javascript",
    completed: false,
  },
];

function removeTodo(id) {
  id
    ? (todos = todos.filter((todo) => todo.id !== id))
    : console.log("id를입력해주세요");
}

removeTodo(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
