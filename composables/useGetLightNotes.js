import axios from "axios";

const useGetLightNotes = () => {
    const lightNotes = ref([])
    const config = {
        headers: {Authorization: `Bearer ${import.meta.env.VITE_BEARER}`},
        params: {
            token: 'bdgm-0001',
        },
    };


    const getNotes = async () => {
        const {data, status} = await axios.get(
            `${import.meta.env.VITE_URL_CNX}`,
            config
        )

        if (status === 200) {
            lightNotes.value = data
        } else {
            console.log('Something went wrong ' + status)
        }

    }
    getNotes()
    return {lightNotes}
}

export default useGetLightNotes