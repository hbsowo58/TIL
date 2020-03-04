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

function toggleCompletedById(id) {
  id
    ? (todos = todos.map((todo) =>
        id === todo.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      ))
    : console.log("id를 입력하세요");
}

toggleCompletedById(2);

console.log(todos);
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
