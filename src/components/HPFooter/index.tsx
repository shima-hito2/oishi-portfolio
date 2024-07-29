import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from "@mui/material"
import type { FC } from "react"
import { themeColor } from "../../features/Users/HomePage"

export const Footer: FC = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#E1DDD1', height: 400, width: '100%', color: themeColor }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: 8, p: 8 }}>
                        <Typography>FOLLOW US</Typography>
                        <InstagramIcon />
                        <TwitterIcon />
                        <EmailIcon />
                        <YouTubeIcon />
                        <PinterestIcon />
                        <FacebookIcon />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 8, p: 8 }}>
                        <Typography>PAGE TOP</Typography>
                        <KeyboardArrowUpIcon />
                    </Box>
                </Box>

                <Box sx={{ width: '100%', textAlign: 'center', fontSize: 40 }}>パンパカパーン</Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-around', }}>
                    <Box>
                        <Typography>ホーム</Typography>
                        <Typography>オンラインストア</Typography>
                        <Typography>食パンのご予約</Typography>
                    </Box>
                    <Box>
                        <Typography>パンラインナップ</Typography>
                        <Box sx={{ borderLeft: `1px solid ${themeColor}`, pl: 1 }}>
                            <Typography>AAA</Typography>
                            <Typography>BBB</Typography>
                            <Typography>CCC</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>&珈琲ラインナップ</Typography>
                        <Box sx={{ borderLeft: `1px solid ${themeColor}`, pl: 1 }}>
                            <Typography>AAA</Typography>
                            <Typography>BBB</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>ショップ</Typography>
                        <Box sx={{ borderLeft: `1px solid ${themeColor}`, pl: 1 }}>
                            <Typography>AAA</Typography>
                            <Typography>BBB</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>よくあるご質問</Typography>
                        <Typography>採用情報</Typography>
                        <Typography>個人情報保護方針</Typography>
                        <Typography>会社概要</Typography>
                        <Typography>お問い合わせ</Typography>
                    </Box>
                </Box>

                <Box sx={{ width: '100%', textAlign: 'center' }}>© Sakimoto Bakery ALL Rights Reserved.</Box>

            </Box >
        </>
    )
}
