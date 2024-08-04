import { Box, Typography } from "@mui/material"
import type { FC } from "react"
import { themeColor } from "."
import { getImage } from "../../../getImagePath"

export const StoryContainer: FC = () => {
    return (
        <Box sx={{ color: themeColor }}>
            <Box sx={{ width: '100%', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: 40 }}>題名</Typography>
                <Typography>説明説明説明説明説明説明説明説明説明説明説明</Typography>
            </Box>
            <Box sx={{ position: 'relative', py: 8, width: '100%', textAlign: 'center', background: `url(${getImage('homepage/background.png')}) center top` }}>
                <Typography sx={{ fontSize: 28 }}>テキストテキストテキストテキストテキスト</Typography>
                <Typography sx={{ fontSize: 28 }}>説明説明説明説明説明説明説明説明説明説明説明</Typography>
                <Typography sx={{ fontSize: 28 }}>説明説明説明説明説明説明</Typography>
                <Box component={'img'} src={getImage('homepage/image1.png')} sx={{ position: 'absolute', top: 260, width: '80%', right: 10, maxHeight: 550 }} />
                <Box sx={{ pt: 'calc(400px + (100vw * 0.2))', textAlign: 'left', px: 4 }}>
                    <Typography sx={{ fontSize: 28, pb: 2 }}>説明説明説明説明説明説明説明説明説明説明説明</Typography>
                    <Typography sx={{ fontSize: 20 }}>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</Typography>
                </Box>
            </Box>
            <Box sx={{ width: '100%', backgroundColor: '#E1DDD1', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: 28 }}>題名</Typography>
                <Typography sx={{ fontSize: 20 }}>説明説明説明説明説明説明説明説明説明説明説明</Typography>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', textAlign: 'center', background: `url(${getImage('homepage/background.png')}) center top`, mb: 4 }}>
                <Box component={'img'} src={getImage('homepage/image1.png')} sx={{ width: '55%' }} />
                <Box sx={{ width: '45%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: 28 }}>題名</Typography>
                    <Typography sx={{ fontSize: 20 }}>説明説明説明説明説明説明説明説明説明説明説明</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', textAlign: 'center', background: `url(${getImage('homepage/background.png')}) center top` }}>
                <Box sx={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: 28 }}>題名</Typography>
                    <Typography sx={{ fontSize: 20 }}>説明説明説明説明説明説明説明説明説明説明説明</Typography>
                </Box>
                <Box component={'img'} src={getImage('homepage/image1.png')} sx={{ width: '60%' }} />
            </Box>
            <Box sx={{ width: '100%', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: 40 }}>題名</Typography>
                <Typography>説明説明説明説明説明説明説明説明説明説明説明</Typography>
            </Box>
            <Box sx={{ width: '100%', height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography>説明説明説明説明説明説明説明説明説明説明説明</Typography>
                <Typography>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</Typography>
                <Typography>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</Typography>
                <Typography>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</Typography>
                <Typography>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</Typography>
            </Box>
        </Box>
    )
}
