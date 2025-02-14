(
    async () => {

        // Random User api for testing
        const url = ('https://randomuser.me/api/');

        try {
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);


        } catch (error) {
            console.log(error);

        }
    }
)();