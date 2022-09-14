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
