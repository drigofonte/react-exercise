class Todo {
  constructor(
    public text: string,
    public id: string = new Date().toISOString()
  ) { }
}

export default Todo;