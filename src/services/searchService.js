import * as request from '@/utils/httpRequest';


export const search = async (debounce) => {
    try {
        const res = await request.get(`users`, {
            params: {
                'full_name:contains': debounce,
                _page: 1,
                _per_page: 5,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err)
    }
}