import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

test('renders NavBar component without crashing', () => {
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    );
});
