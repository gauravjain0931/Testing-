import {render, screen, cleanup} from '@testing-library/react'
import Todo from "../todo"; 
// we will need this file in order to test it
// we will find the id from todo.js into the todo.test.js file and render it 

afterEach (() => {
    cleanup();
});

test('should render completed todo ',()=>
{
    const todo = {id:1, title: "Bring Grocery", completed : false};
    render (<Todo todo = {todo} />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Bring Grocery');
    expect(todoElement).toContainElement('<strike>'); 
})

test('should render not-completed todo',()=>
{
    const todo = {id:2, title: "Wash Utensils", completed : true};
    render (<Todo todo = {todo} />);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Wash Utensils');
    expect(todoElement).toContainElement('<strike>'); 
})

afterEach (() => {
    cleanup();
});

// MCQ -> Command 
//redux initalixze json server 
// API -> JSON 
// C- Create
// R- Read 
// U - Update
// D - Delete