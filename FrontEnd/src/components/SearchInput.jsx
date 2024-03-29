import React from 'react'

const SearchInput = () => {
    return (
        <div className='flex justify-center items-center my-2 h-14 w-full '>
            <form action="" className=''>
                <input type="text" placeholder="Search" className="input input-bordered rounded-full text-white" />
                <button type='submit' className='btn btn-circle border-cyan-500 hover:border-cyan-500 hover:bg-sky-700 bg-sky-500 texg-white mx-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 opacity-70 fill-white"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </button>
            </form>
        </div>


    )
}

export default SearchInput