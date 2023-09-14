import axios from 'axios';

const getCardImage = async (spid: number) => {
    const pid = spid % 1000000;
    const urls = [
        `${process.env.CARD_ACTION_IMG}/p${spid}.png`,
        `${process.env.CARD_ACTION_IMG}/p${pid}.png`,
        `${process.env.CARD_IMG}/p${spid}.png`,
        `${process.env.CARD_IMG}/p${pid}.png`,
    ];
    let result = '';
    for (let i = 0; i < 4; i++) {
        await axios(urls[i], {
            headers: {
                Authorization: process.env.NEXON_API_KEY,
            },
        })
            .then((res) => {
                if (res.status === 200) {
                    result = urls[i];
                }
            })
            .catch(() => '');
        if (result !== '') {
            break;
        }
    }
    return result;
};

export default getCardImage;
