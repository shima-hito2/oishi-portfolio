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
import { getImage } from '../../getImagePath';

export const Footer: FC = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#E1DDD1', height: 400, width: '100%', color: themeColor }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: 8, p: 8 }}>
                        <Typography>FOLLOW US</Typography>
                        <InstagramIcon />
                        <TwitterIcon />
                        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                        <image href={getImage('homePage/lineIcon.svg')} />
                        {/* <svg width="100" height="100" xmlns={getImage('homePage/lineIcon.svg')} viewBox="0 0 100 100">
                        </svg> */}
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

            </Box >
        </>
    )
}
