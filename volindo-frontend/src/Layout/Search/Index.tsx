import { useState, useRef } from 'react'
import { SearchModal } from '../../Components/ResultsList/Index';

export const Search = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [searchString, setSearchString] = useState('');

    const handleChange = () => {
        if (inputRef.current) {
            setSearchString(inputRef.current.value);
        }
    }

    return (
        <div className='mt-5 ms-3 me-3'>
            <div className="input-group mb-3">
            <span className="input-group-text text-bg-dark" id="inputGroup-sizing-default">Search:</span>
            <input
                type="text"
                ref={inputRef}
                onChange={handleChange}
                className='form-control border-0 border-bottom bg-transparent text-white'
            />
            </div>
            <SearchModal searchString={searchString} />
        </div>
    )
};