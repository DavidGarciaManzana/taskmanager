import axios from "axios";

const useGetLightNotes = () => {
    const lightNotes = ref([])
    const token = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd'
    const config = {
        headers: {Authorization: `Bearer ${token}`},
        params: {
            token: 'bdgm-0001',
        },
    };


    const getNotes = async () => {
        const {data,status} = await axios.get(
            'https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks',
            config
        )

        if( status===200 ) {
            lightNotes.value = data
        } else {
            console.log('Something went wrong ' + status)
        }

    }
    getNotes()
    return{lightNotes}
}

export default useGetLightNotes