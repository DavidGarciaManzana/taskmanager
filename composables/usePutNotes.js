import axios from "axios";

const usePutNotes = () => {
    const answer = ref([])
    const config = {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
            "Content-Type": "application/x-www-form-urlencoded",

        }
    };
    const updateNote = async (id, title, is_completed,date='',comments='',description='',tags='') => {

        const data = {
            token: 'bdgm-0001',
            title,
            is_completed,
            date,
            comments,
            description,
            tags
        }

        try {
            const resp = await axios.put(
                `${import.meta.env.VITE_URL_CNX}/${id}`,
                data,
                config
            )
            answer.value = resp.data.task
            return answer
        } catch (error) {
            console.log(error)
        }

    }

    return {updateNote}
}

export default usePutNotes