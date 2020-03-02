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

function addTodo(newTodo) {
  newTodo ? (todos = [newTodo, ...todos]) : console.log("새 할일을 입력하세요");
}

addTodo({
  id: 4,
  content: "Test",
  completed: false,
});

console.log(todos);
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/
