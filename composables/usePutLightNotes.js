import axios from "axios";

const usePutLightNotes = () => {
    const answer = ref([])
    const config = {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
            "Content-Type": "application/x-www-form-urlencoded",

        }
    };
    const updateLightNote = async (id, title, is_completed, content='', date='', comments='', tags='') => {
        console.log(content, date, comments, tags)
        if (is_completed === 1) {
            is_completed = 0
        } else {
            is_completed = 1
        }
        const data = {
            token: 'bdgm-0001',
            title,
            is_completed,
            content,
            date,
            comments,
            tags
        }

        try {
            const resp = await axios.put(
                `${import.meta.env.VITE_URL_CNX}/${id}`,
                data,
                config
            )
            answer.value = resp
        } catch (error) {
            console.log(error)
        }

    }

    return {updateLightNote}
}

export default usePutLightNotes