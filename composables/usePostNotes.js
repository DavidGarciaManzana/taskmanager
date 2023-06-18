import axios from "axios";
const usePostNotes = () => {
    const answer = ref([])
    const token = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };

    const postNotes = async (title,is_completed,date='',comments='',description='',tags='') => {
        const data = {
            token: 'bdgm-0001',
            title: title,
            is_completed: is_completed,
            due_date:date,
            comments:comments,
            description:description,
            tags:tags
        }
        try {
            const resp = await axios.post(
                'https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks',
                data,
                config
            )
            answer.value = resp
            console.log(resp)
        } catch(error){
            console.log(error)
        }
    }
    return{postNotes}
}
export default usePostNotes