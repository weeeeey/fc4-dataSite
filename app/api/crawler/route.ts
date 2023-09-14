import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio, { Element } from 'cheerio';

const getHtml = async (url: string) => {
    try {
        // url로 html 요청 후 cheerio에 html 로드
        const html = await axios.get(url);
        const $ = cheerio.load(html.data);

        let content: any[] = []; // 결과값으로 return 해 줄 변수
        const ARTICLE_SELECTOR = $(
            '#root div:nth-child(2) div:nth-child(3) div:nth-child(4) div:nth-child(3) > div > div'
        ); // 게시물 선택, 동일 태그가 여러개여서 배열로 생성됩니다.

        // FUNCTION 태그 구하는 함수
        const getTag = (tagSelector: Element) => {
            let result: string[] = [];

            // 게시물 DOM을 파라미터로 받아 그 게시물의 태그를 선택합니다.
            const tagList = $(tagSelector).find('.tags-wrapper > a');

            tagList.map((idx, el) => {
                const tag = $(el).text();
                result[idx] = tag;
            });

            return result;
        };

        // 선택한 게시물 갯수만큼 처음에 선언했던 content 배열에
        // 각 게시물의 정보를 입력합니다.
        ARTICLE_SELECTOR.map((idx, el) => {
            content[idx] = {
                head: $(el).find('img').attr('src'),
                date: $(el).find('.subinfo > span:first-of-type').text(),
                context: $(el).find('p').text(),
                href: $(el).find('a:first-child').attr('href'),
                headline: $(el).find('h2').text(),
                tags: getTag(el),
            };
        });

        return content;
    } catch (e) {
        console.log(e);
    }
};

const article = getHtml(process.env.NEXT_PUBLIC_BLOG_URL || '');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(await article); // 크롤링한 결과값 json 형식으로 send
}
