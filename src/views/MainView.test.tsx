import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import MainView from "./MainView";
import userEvent from "@testing-library/user-event";

test('renders MainView screen', async () => {
    render(
        <Provider store={store}>
            <MainView/>
        </Provider>
    );

    expect(screen.getByText(`How's the weather?`)).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('search-button')).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('search-input'), "Riga");
    fireEvent.click(screen.getByTestId('search-button'));

    // I don't really intend to create some tests, just saw jest in the CRA template and did a quick research about it.

});
