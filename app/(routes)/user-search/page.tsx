import { useEffect } from 'react';

// https://cheerio.js.org/docs/intro
import * as cheerio from 'cheerio';
import axios from 'axios';

const UserSearchPage = async () => {
    const url = 'https://weeeeey.tistory.com/';

    // 페이지 내용을 가져옵니다.
    const { data } = await axios.get(url);

    // Cheerio를 사용하여 페이지를 파싱합니다.

    const $ = cheerio.load(data);

    // // 크롤링할 내용을 선택자를 사용하여 추출합니다.
    const crawledData = {
        tbody: $('p.summary').text(),
        //     // 여기에 원하는 데이터를 추가로 추출할 수 있습니다.
    };
    console.log(crawledData.tbody);
    return <div></div>;
};

export default UserSearchPage;
