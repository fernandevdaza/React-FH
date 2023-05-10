import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props) => {
    const { onNewCategory } = props;

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form aria-label="form" onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
};
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
