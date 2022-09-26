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

  })