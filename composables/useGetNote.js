import axios from "axios";

const useGetNote = () => {
    const bigNote = ref([])
    const config = {
        headers: {Authorization: `Bearer ${import.meta.env.VITE_BEARER}`},
        params: {
            token: 'bdgm-0001',
        },
    };


    const getNote = async (id) => {
        const {data,status} = await axios.get(
            `${import.meta.env.VITE_URL_CNX}/${id}`,
            config
        )

        if( status===200 ) {
            bigNote.value = data
            return bigNote
        } else {
            console.log('Something went wrong ' + status)
        }

    }
    return{getNote}
}

export default useGetNote