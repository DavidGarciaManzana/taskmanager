import axios from "axios";
const usePostNotes = () => {
   const date_value = new Date().toString()
    const answer = ref([])
    const config = {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };

    const postNotes = async (title,is_completed,date='date_value',comments='',description='',tags='') => {
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
            answer.value = resp
            console.log(answer.value)
        } catch(error){
            console.log(error)
        }
    }
    return{postNotes}
}
export default usePostNotes