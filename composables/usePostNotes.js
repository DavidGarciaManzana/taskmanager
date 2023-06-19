import axios from "axios";
const usePostNotes = () => {
    const answer = ref([])
    const config = {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };

    const postNotes = async (title,is_completed,date,comments='',description='',tags='') => {
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
                `${import.meta.env.VITE_URL_CNX}`,
                data,
                config
            )
            answer.value = resp.data.task.id
            return answer.value
        } catch(error){
            console.log(error)
        }
    }
    return{postNotes}
}
export default usePostNotes