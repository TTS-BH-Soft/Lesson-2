import tw from 'twin.macro'

export const SearchBarContainer = tw.div`
    bg-white rounded-lg shadow-lg p-4
`

export const SearchInput = tw.input`
    w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
`
export const SearchButton = tw.button`
    w-full mt-2 bg-blue-600 text-white p-2 rounded-lg flex justify-center items-center hover:bg-blue-700
`
