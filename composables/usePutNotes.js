import axios from "axios";

const usePutNotes = (id, title, is_completed) => {
    if (is_completed === 1) {
        is_completed = 0
    } else {
        is_completed = 1
    }
    const answer = ref([])
    const token = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",

        }
    };
    const data = {
        token: 'bdgm-0001',
        title: title,
        is_completed: is_completed

    }

    const updateNote = async () => {
        console.log(id, title, is_completed)
        try {
            const resp = await axios.put(
                `https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${id}`,
                data,
                config
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

    return {updateNote}
}

export default usePutNotes