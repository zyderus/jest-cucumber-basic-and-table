import { loadFeature, defineFeature } from 'jest-cucumber';
import { TodoList } from '../src/todo-list';

const feature = loadFeature('features/todo-list.feature');

defineFeature(feature, (test) => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  test('Adding an item to my todo list', ({ given, when, then }) => {
    given('my todo list currently looks as follows:', (table) => {
      table.forEach((row) => {
        todoList.add({ name: row.TaskName, priority: row.Priority });
      });

      // console.log(todoList);
    });

    when('I add the following task:', (table) => {
      todoList.add({ name: table[0].TaskName, priority: table[0].Priority });

      // console.log(todoList);
    });

    then('I should see the following todo list:', (table) => {
      expect(table.length).toBe(todoList.items.length);

      table.forEach((row, i) => {
        // console.log(row);

        // expect(todoList.items[i].name).toBe(row.TaskName);
        expect(todoList.items[i].name).toBe(table[i].TaskName);
      });
    });
  });
});
