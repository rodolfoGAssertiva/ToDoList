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
