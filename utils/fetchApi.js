import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'dc412f2a70msh711a5d9d5cb4422p1d2c71jsnefdf2d62fb2c'
        }
    })
    return data;
}