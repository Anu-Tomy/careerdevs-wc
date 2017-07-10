var todos = ['item1','item2','item3']
todos.push('item4','item5')
todos[0]='item1 updated'
todos.splice(0,1)
todos.splice(3,1)
console.log('Mytodos:',todos)