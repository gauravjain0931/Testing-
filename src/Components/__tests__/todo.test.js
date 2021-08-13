import {render, screen, cleanup} from '@testing-library/react'
import Todo from "../todo"; 
// we will need this file in order to test it
// we will find the id from todo.js into the todo.test.js file and render it 

test('should render todo component', ()=>
{
    render(<Todo/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
})