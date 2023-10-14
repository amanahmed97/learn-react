import * as React from 'react';
import { render, fireEvent, cleanup, getByTestId, wait } from '@testing-library/react';

import { Select } from '../select';

const options = [
    { label: 'option 1', value: '1' },
    { label: 'option 2', value: '2' },
    { label: 'option 3', value: '3' },
];

afterEach(cleanup);

describe('Testing our Select component', () => {
    test('if component renders without crashing', () => {
        const { getByText, getByAltText } = render(<Select options={options} />);
        const controlElement = getByText('Select');
        const dropdownIndicator = getByAltText('dropdown indicator down');
        expect(controlElement).toBeInTheDocument();
        expect(dropdownIndicator).toBeInTheDocument();
    });

    test('If menu shows up on clicking the select control', () => {
        const { getByRole } = render(<Select options={options} />);
        const controlElement = getByRole('button');
        fireEvent.click(controlElement);

        const menuList = getByRole('menu-list');
        const dropdownIndicator = getByRole('img');
        expect(dropdownIndicator).toHaveAttribute('alt', 'dropdown indicator up');
        expect(menuList).toBeInTheDocument();

        fireEvent.click(controlElement);
        expect(dropdownIndicator).toHaveAttribute('alt', 'dropdown indicator down');
        expect(menuList).not.toBeInTheDocument();
    });

    test('if our options are rendered correctly', () => {
        const { getByRole, getAllByRole } = render(<Select options={options} />);
        const controlElement = getByRole('button');
        fireEvent.click(controlElement);

        const menuOptions = getAllByRole('option');
        expect(menuOptions).toHaveLength(options.length);
    });

    test('If the rendered options are correct', () => {
        const { getByRole, getByText } = render(<Select options={options} />);
        const controlElement = getByRole('button');
        fireEvent.click(controlElement);
        options.forEach(({ label, value }) => expect(getByText(label)).toBeVisible());
    });

    test('if selecting an option is working', () => {
        const { getByRole, getByText } = render(<Select options={options} />);
        const controlElement = getByRole('button');
        fireEvent.click(controlElement);
        fireEvent.click(getByText(options[1].label));
        wait(() => expect(controlElement).toHaveTextContent(options[1].label));
    });
});
