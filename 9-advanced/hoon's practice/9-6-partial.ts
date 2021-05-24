{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    prirority: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, filesToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...filesToUpdate }; //스프레드 연산자 다시한번 보자 업데이트 하는법
  }

  const todo: ToDo = {
    title: 'Cs',
    description: 'learn CS',
    label: 'Cheer up',
    prirority: 'high',
  };
  //todo = [object Object],updatedTodo = [object Object] 이렇게 나오는 이유는 뭘까용,,
  
  const updatedTodo = updateTodo(todo, { prirority: 'low' });
  console.log(todo,updatedTodo);
}
