import { Box, Container, Typography } from "@mui/material"
import type { FC } from "react"

import { getImage } from '../../../getImagePath';
import { NewsItems } from "./NewsItems";

export const items = [
    {
        id: '1',
        imgPath: getImage('image1.png'),
        datetime: '2022/12/5',
        title: 'タイトルほにゃほにゃ',
        detail: 'あなたを詐欺罪と器物損壊罪で訴えます！理由はもちろんお分かりですね？あなたが皆をこんなウラ技で騙し、セーブデータを破壊したからです！覚悟の準備をしておいて下さい。ちかいうちに訴えます。裁判も起こします。裁判所にも問答無用できてもらいます。慰謝料の準備もしておいて下さい！貴方は犯罪者です！刑務所にぶち込まれる楽しみにしておいて下さい！いいですね！',
    },
    {
        id: '2',
        imgPath: getImage('image2.png'),
        datetime: '2024/7/15',
        title: 'タイトルほにゃほにゃ',
        detail: 'あなたを詐欺罪と器物損壊罪で訴えます！理由はもちろんお分かりですね？あなたが皆をこんなウラ技で騙し、セーブデータを破壊したからです！覚悟の準備をしておいて下さい。ちかいうちに訴えます。裁判も起こします。裁判所にも問答無用できてもらいます。慰謝料の準備もしておいて下さい！貴方は犯罪者です！刑務所にぶち込まれる楽しみにしておいて下さい！いいですね！',
    },
    {
        id: '3',
        imgPath: getImage('image3.png'),
        datetime: '2024/7/16',
        title: 'タイトルほにゃほにゃ',
        detail: 'あなたを詐欺罪と器物損壊罪で訴えます！理由はもちろんお分かりですね？あなたが皆をこんなウラ技で騙し、セーブデータを破壊したからです！覚悟の準備をしておいて下さい。ちかいうちに訴えます。裁判も起こします。裁判所にも問答無用できてもらいます。慰謝料の準備もしておいて下さい！貴方は犯罪者です！刑務所にぶち込まれる楽しみにしておいて下さい！いいですね！',
    },
    {
        id: '4',
        imgPath: getImage('image3.png'),
        datetime: '2024/7/17',
        title: 'タイトルほにゃほにゃ',
        detail: 'あなたを詐欺罪と器物損壊罪で訴えます！理由はもちろんお分かりですね？あなたが皆をこんなウラ技で騙し、セーブデータを破壊したからです！覚悟の準備をしておいて下さい。ちかいうちに訴えます。裁判も起こします。裁判所にも問答無用できてもらいます。慰謝料の準備もしておいて下さい！貴方は犯罪者です！刑務所にぶち込まれる楽しみにしておいて下さい！いいですね！',
    },
];

type Props = {
    title: string
}


export const ItemList: FC<Props> = (props: Props) => {
    const { title } = props;
    return (
        <>
            <Box sx={{ width: '100%', height: 200, backgroundColor: '#808080', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: 40 }}>{title}</Typography>
                <Typography>ポートフォリオの最新情報をお伝えします。</Typography>
            </Box>

            <Container>
                <Box
                    sx={{
                        display: { md: 'flex' },
                        justifyContent: { md: 'space-between' },
                        flexWrap: 'wrap',
                        my: 2,
                    }}
                >
                    {items.map(item => (
                        <NewsItems key={item.id} item={item} />
                    ))}
                </Box>
            </Container>
        </>
    )
}
