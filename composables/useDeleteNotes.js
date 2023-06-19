import axios from "axios";
const useDeleteNotes = (id) => {
    const answer = ref([])
    const config = {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
        },
        params:{
            token: 'bdgm-0001'
        }
    };
    const deleteNote = async () => {
        try {
            const resp = await axios.delete(
                `${import.meta.env.VITE_URL_CNX}/${id}`,
                config,
            )
            answer.value = resp
        } catch (error) {
            console.log(error)
        }
    }
    return {deleteNote}
}
export default useDeleteNotes