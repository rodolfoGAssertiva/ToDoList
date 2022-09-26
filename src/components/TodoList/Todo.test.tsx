<<<<<<< HEAD
import React from "react";
import TodoList from "./TodoList";
import '@testing-library/jest-dom';
import {render} from '@testing-library/react'

it('Loads and displays greeting', async () => {
    render(<TodoList></TodoList>);
})
=======
import React from "react";
import TodoList from "./TodoList";

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

// describe("Test for Todo component", () => {
//   it("Should add new task when form has been submitted", async () => {
//     //renderizar o componente
//     const { getByTestId } = render(<TodoList></TodoList>);
//     console.log(getByTestId);
//     //buscar botao
//     // await userEvent.click(screen.getByText("Load Greeting"));
//   });
// });

test('Loads and displays greeting', async () => {
    //renderizar o componente
    render(<TodoList></TodoList>);
})

//buscar o input
//digitar o input
//buscar o botao
//clicar no botao
//buscar a tabela
//verifica se a tarefa foi adicionada na tabela
>>>>>>> 9c76f0e009957d957e3f3f1077a4b581a47ec381
