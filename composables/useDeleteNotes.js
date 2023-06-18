import axios from "axios";
const useDeleteNotes = (id) => {
    const answer = ref([])
    const token = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params:{
            token: 'bdgm-0001'
        }
    };
    const deleteNote = async () => {
        console.log(id)
        try {
            const resp = await axios.delete(
                `https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${id}`,
                config,
            )
            answer.value = resp
            console.log(answer.value)
            console.log(resp)
            console.log('aaaaaa')
        } catch (error) {
            console.log(error)
            console.log('bbbb')
        }
    }
    return {deleteNote}
}
export default useDeleteNotes