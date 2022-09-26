<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import Form from "./Form";
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const renderForm = () => {
  render(<Form />);
  return screen.getByTestId("form-field");
};

describe("Form Component", () => {
  it("The title of the form must be ToDo List", async () => {
    const view = renderForm();

    const formTitle = screen.getByRole("heading", {
      name: /todo list/i,
    });

    expect(formTitle.textContent).toEqual("ToDo List");
  });

  it("Check if the Add button exists", () => {
    const view = renderForm();
    const buttonAdd = screen.getByRole("button", {
      name: /Adicionar/i,
    });

    expect(buttonAdd).toBeInTheDocument();
  });

  it("Check input label", () => {
    const { debug } = render(<Form />);
    const labelInput = screen.queryByPlaceholderText("Digite uma tarefa");

    expect(labelInput).toBeInTheDocument();
  });

  it("Checks if the 'Remove' button exists in a task", async () => {
    const view = render(<Form />);

    const inputAddTask = screen.getByTestId("input-form");

    await userEvent.type(inputAddTask, "Estudar, Jest.");

    expect(inputAddTask).toBeInTheDocument();

    const btnAdd = screen.getByTestId("form-button-add");

    await waitFor(async () => await expect(btnAdd).toBeInTheDocument());

    await userEvent.click(btnAdd);

    const btnRemove = await screen.findByRole("button", { name: /remover/i });

    expect(btnRemove).toBeInTheDocument();
  });

  it("Checks if the Add button adds the tasks", async () => {
    render(<Form />);

    const inputAddTask = screen.getByTestId("input-form");

    await userEvent.type(inputAddTask, "Estudar, Testing Library.");

    await waitFor(async () => await expect(inputAddTask).toBeInTheDocument());

    const btnAdd = screen.getByTestId("form-button-add");

    await waitFor(async () => expect(btnAdd).toBeInTheDocument());

    await waitFor(async () => await fireEvent.click(btnAdd))

    
  });

  it("Check if the 'Remove' button deletes the tasks.", async () => {
    // render(<Form/>)j
    const { debug } = render(<Form />);

    const inputAddTask = screen.getByTestId("input-form");

    await userEvent.type(inputAddTask, "Levar o cachorro para passear.");

    expect(inputAddTask).toBeInTheDocument();

    const btnAdd = screen.getByTestId("form-button-add");

    await waitFor(async () => expect(btnAdd).toBeInTheDocument());

    await waitFor(async () => await userEvent.click(btnAdd));

    const btnRemove = await screen.findByTestId("form-button-remove");
  
    await waitFor(async () => await userEvent.click(btnRemove));

    setTimeout(() =>{
      expect(screen.queryByTestId("form-button-remove")).not.toBeInTheDocument();
    })

  });

  it("Checks if the input is empty and returns the error message", async () => {
    const {debug} = render(<Form/>)

    const inputAddTask = screen.getByTestId("input-form");

    expect(inputAddTask).toBeInTheDocument();

    const btnAdd = screen.getByTestId("form-button-add");

    await waitFor(async () => expect(btnAdd).toBeInTheDocument());

    await userEvent.click(btnAdd)

    const spanErrorMenssage = await screen.findByText("Este campo é obrigatório.")

    await waitFor(async () => await expect(spanErrorMenssage).toBeInTheDocument());

    // screen.logTestingPlaygroundURL();

  });

  it("Check tasks in TasksList", async () => {
    const view = renderForm();

    const inputAddTask = screen.getByTestId("input-form");

    await userEvent.type(inputAddTask, "Estudar Testing Library.");

    expect(inputAddTask).toBeInTheDocument();

    const btnAdd = screen.getByTestId("form-button-add");

    await waitFor(async () => expect(btnAdd).toBeInTheDocument());

    await userEvent.click(btnAdd)

    const btnRemove = await screen.findByRole('button', {  name: /remover/i});

    const checkbox =  screen.getByRole('checkbox');

    setTimeout( ()=>{

      expect(screen.getByText("Estudar Testing Library.")).toBeInTheDocument();
  
      expect(checkbox).toBeInTheDocument();
  
      expect(btnRemove).toBeInTheDocument();
    })

    // screen.logTestingPlaygroundURL();

  })
});
=======
import React from "react";
import Form from "./Form";
import {render, screen} from '@testing-library/react'

describe("Form Component", () => {

    test("O titulo do formulario deve ser ToDo List",  async () =>{
        render(<Form></Form>);
        
        const formTitle = screen.getByRole('heading', {
            name: /todo list/i
          })

        // expect(formTitle)
        // // using findBy* methods
        // const fieldNode = await screen.findByText('form-field');
        // const newTask = 'testing';
    
        // fireEvent.change(
        //     fieldNode,
        //     {target: {value: newTask}}
        // )
    
        // expect(fieldNode.value).toEqual(newTask);
    
        // const btnNode = await waitFor(() => getByTestId)
        // fireEvent.click(btnNode);
    
        }
    )
})
>>>>>>> 9c76f0e009957d957e3f3f1077a4b581a47ec381
=======
import React from "react";
import Form from "./Form";
import {render, screen} from '@testing-library/react'

describe("Form Component", () => {

    test("O titulo do formulario deve ser ToDo List",  async () =>{
        render(<Form></Form>);
        
        const formTitle = screen.getByRole('heading', {
            name: /todo list/i
          })

        // expect(formTitle)
        // // using findBy* methods
        // const fieldNode = await screen.findByText('form-field');
        // const newTask = 'testing';
    
        // fireEvent.change(
        //     fieldNode,
        //     {target: {value: newTask}}
        // )
    
        // expect(fieldNode.value).toEqual(newTask);
    
        // const btnNode = await waitFor(() => getByTestId)
        // fireEvent.click(btnNode);
    
        }
    )
})
>>>>>>> 9c76f0e009957d957e3f3f1077a4b581a47ec381
