import React from "react";
import TodoList from "./TodoList";
import '@testing-library/jest-dom';
import {render} from '@testing-library/react'

it('Loads and displays greeting', async () => {
    render(<TodoList></TodoList>);
})
