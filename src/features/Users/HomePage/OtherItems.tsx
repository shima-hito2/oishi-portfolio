import { Box, Typography } from "@mui/material";
import type { FC } from "react"
import Carousel from "react-material-ui-carousel";
import { themeColor } from ".";
import { getImage } from "../../../getImagePath";

const images = [
    {
        label: 'パンA',
        price: '200',
        imgPath: getImage('homePage/image1.png'),
    },
    {
        label: 'パンB',
        price: '400',
        imgPath: getImage('homePage/image2.png'),
    },
    {
        label: 'パンC',
        price: '260',
        imgPath: getImage('homePage/image3.png'),
    },
    {
        label: 'パンD',
        price: '150',
        imgPath: getImage('homePage/image4.png'),
    },
    {
        label: 'パンE',
        price: '700',
        imgPath: getImage('homePage/image5.png'),
    },
];

export const OtherItems: FC = () => {
    return (
        <>
            <Box sx={{ pt: 8, height: 400, width: '100%', textAlign: 'center', background: `url(${getImage('homepage/background.png')}) center top` }}>
                <Typography sx={{ fontSize: 32 }}>
                    その他のおすすめ商品一覧
                </Typography>
                {/* カルーセル */}
                <Carousel
                    autoPlay={true} //自動でCarouselを動かすかどうか(true or false)
                    //stopAutoPlayOnHover = {true} Carouselの上にマウスを置いている間、自動スクロールを継続するかどうか
                    //interval = {4000} 自動でCarouselを動かす時間の間隔(ミリ秒単位)
                    animation='fade' //(fade or slide) Carouselのアニメーションの種類を変更
                    //duration = {500} アニメーションの長さを定義
                    //swipe = {true} スワイプで動かせるかどうか
                    indicators={false} //インジケーター(下の丸いアイコン)が必要かどうか
                    // navButtonsAlwaysVisible={true} //常に矢印アイコンを表示するかどうか
                    navButtonsAlwaysInvisible={true} //常に矢印アイコンを非表示にするかどうか
                    //cycleNavigation = {true} //最後のスライドから「次へ」の矢印アイコンを押した時に最初にスライドに動かせるようにするかどうか
                    //fullHeightHover = {true} //次/前のボタンがItem要素の高さ全体をカバーし、ホバー時にボタンを表示するかどうか

                    indicatorIconButtonProps={{//アクティブでない下の丸いアイコンの設定
                        style: {
                            padding: '10px',//位置調整
                            color: '#DEDEDE',
                        }
                    }}
                    activeIndicatorIconButtonProps={{//アクティブな下の丸いアイコンの設定
                        style: {
                            color: themeColor,
                        }
                    }}
                    indicatorContainerProps={{
                        style: {
                            margin: "3px 0px 0px 0px"
                        }
                    }}
                    navButtonsWrapperProps={{
                        style: {
                            marginTop: "55px",
                        }
                    }}
                    navButtonsProps={{
                        style: {
                            color: "rgb(0,0,0,1)",
                            background: "rgb(255,255,255,0)",
                        }
                    }}>
                    {images.map((step, idx) => (
                        <Box key={step.label} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                sx={{
                                    height: 300,
                                    display: 'block',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
                                    mx: 1,
                                    fontSize: 40,
                                    textAlign: 'left',
                                    backgroundColor: '#FFF'
                                }}
                            >
                                <Box sx={{ height: 200, width: 800 }} component='img' src={idx === 0 ? images[images.length - 1].imgPath : images[idx - 1].imgPath} />
                                <Typography sx={{ color: themeColor }}>{idx === 0 ? images[images.length - 1].label : images[idx - 1].label}</Typography>
                                <Typography sx={{ color: themeColor }}>{idx === 0 ? images[images.length - 1].price : images[idx - 1].price}yen / 税込</Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: 300,
                                    display: 'block',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
                                    mx: 1,
                                    fontSize: 40,
                                    textAlign: 'left',
                                    backgroundColor: '#FFF'
                                }}
                            >
                                <Box sx={{ height: 200, width: 800 }} component='img' src={step.imgPath} />
                                <Typography sx={{ color: themeColor }}>{step.label}</Typography>
                                <Typography sx={{ color: themeColor }}>{step.price}yen / 税込</Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: 300,
                                    display: 'block',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
                                    mx: 1,
                                    fontSize: 40,
                                    textAlign: 'left',
                                    backgroundColor: '#FFF'
                                }}
                            >

                                <Box sx={{ height: 200, width: 800 }} component='img' src={idx === images.length - 1 ? images[0].imgPath : images[idx + 1].imgPath} />
                                <Typography sx={{ color: themeColor }}>{idx === images.length - 1 ? images[0].label : images[idx + 1].label}</Typography>
                                <Typography sx={{ color: themeColor }}>{idx === images.length - 1 ? images[0].price : images[idx + 1].price}yen / 税込</Typography>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </>
    )
}
