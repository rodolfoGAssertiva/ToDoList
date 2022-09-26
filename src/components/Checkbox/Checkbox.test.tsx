<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import Checkbox from "./Checkbox";
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

test('handles click correctly', async () => {
    render(<Checkbox />)

    const check = screen.getByRole('checkbox') as HTMLInputElement;

    expect(check).not.toBeChecked()
    expect(check.checked).toEqual(false)

    await userEvent.click(check)

=======
import React from "react";
import Checkbox from "./Checkbox";
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

test('handles click correctly', async () => {

    render(<Checkbox />)

    const check = screen.getByRole('checkbox');
    // expect(check).not.toBeChecked()
    expect(check.checked).toEqual(false)

    // const user = userEvent;

    await userEvent.click(check)
    // expect(check.checked).toEqual(false)
    // expect(screen.getByRole('checkbox')).toBeChecked()
>>>>>>> 9c76f0e009957d957e3f3f1077a4b581a47ec381
=======
import React from "react";
import Checkbox from "./Checkbox";
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

test('handles click correctly', async () => {

    render(<Checkbox />)

    const check = screen.getByRole('checkbox');
    // expect(check).not.toBeChecked()
    expect(check.checked).toEqual(false)

    // const user = userEvent;

    await userEvent.click(check)
    // expect(check.checked).toEqual(false)
    // expect(screen.getByRole('checkbox')).toBeChecked()
>>>>>>> 9c76f0e009957d957e3f3f1077a4b581a47ec381
  })