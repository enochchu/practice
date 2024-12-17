import React from 'react';
import { render } from '@testing-library/react';
import {TodoList} from "./TodoList";

describe('App Tests', () => {
    test('renders TodoList successfully', () => {
        render(<TodoList />);
    });

    test('should be able to add a todo item', () => {

    });

    // What other tests can we do?
});
