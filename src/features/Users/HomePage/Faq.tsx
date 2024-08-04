import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import type { FC } from "react"
import { themeColor } from "."

export const Faq: FC = () => {
    return (
        <>
            <Box sx={{ width: '100%', height: 200, backgroundColor: '#808080', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: 40 }}>よくあるご質問</Typography>
            </Box>
            <Box sx={{ width: '100%', color: themeColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontSize: 32 }}>カテゴリ1</Typography>
                    <Accordion sx={{ boxShadow: 'none', color: themeColor, borderRadius: '0 !important', backgroundColor: '#F2F0E6', mb: 2 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <QuestionMarkIcon sx={{ pr: 2 }} />
                            質問1
                        </AccordionSummary>
                        <AccordionDetails>
                            回答1回答1回答1回答1回答1回答1回答1回答1回答1回答1回答1回答1回答1回答1
                            回答1回答1回答1回答1回答1回答1回答1
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: 'none', color: themeColor, borderRadius: '0 !important', backgroundColor: '#F2F0E6', mb: 2 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <QuestionMarkIcon sx={{ pr: 2 }} />
                            質問2
                        </AccordionSummary>
                        <AccordionDetails>
                            回答2回答2回答2回答2回答2回答2回答2回答2回答2回答2回答2回答2回答2回答2
                            回答2回答2回答2回答2回答2回答2回答2
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: 'none', color: themeColor, borderRadius: '0 !important', backgroundColor: '#F2F0E6', mb: 2 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <QuestionMarkIcon sx={{ pr: 2 }} />
                            質問3
                        </AccordionSummary>
                        <AccordionDetails>
                            回答3回答3回答3回答3回答3回答3回答3回答3回答3回答3回答3回答3回答3回答3
                            回答3回答3回答3回答3回答3回答3回答3
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontSize: 32 }}>カテゴリ2</Typography>
                    <Accordion sx={{ boxShadow: 'none', color: themeColor, borderRadius: '0 !important', backgroundColor: '#F2F0E6', mb: 2 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <QuestionMarkIcon sx={{ pr: 2 }} />
                            質問1
                        </AccordionSummary>
                        <AccordionDetails>
                            回答1回答1回答1回答1回答1回答1回答1回答1回答1回答1回答1回答1回答1回答1
                            回答1回答1回答1回答1回答1回答1回答1
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: 'none', color: themeColor, borderRadius: '0 !important', backgroundColor: '#F2F0E6', mb: 2 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <QuestionMarkIcon sx={{ pr: 2 }} />
                            質問2
                        </AccordionSummary>
                        <AccordionDetails>
                            回答2回答2回答2回答2回答2回答2回答2回答2回答2回答2回答2回答2回答2回答2
                            回答2回答2回答2回答2回答2回答2回答2
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: 'none', color: themeColor, borderRadius: '0 !important', backgroundColor: '#F2F0E6', mb: 2 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <QuestionMarkIcon sx={{ pr: 2 }} />
                            質問3
                        </AccordionSummary>
                        <AccordionDetails>
                            回答3回答3回答3回答3回答3回答3回答3回答3回答3回答3回答3回答3回答3回答3
                            回答3回答3回答3回答3回答3回答3回答3
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: 'none', color: themeColor, borderRadius: '0 !important', backgroundColor: '#F2F0E6', mb: 2 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <QuestionMarkIcon sx={{ pr: 2 }} />
                            質問4
                        </AccordionSummary>
                        <AccordionDetails>
                            回答4回答4回答4回答4回答4回答4回答4回答4回答4回答4回答4回答4回答4回答4
                            回答4回答4回答4回答4回答4回答4回答4
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: 'none', color: themeColor, borderRadius: '0 !important', backgroundColor: '#F2F0E6', mb: 2 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <QuestionMarkIcon sx={{ pr: 2 }} />
                            質問5
                        </AccordionSummary>
                        <AccordionDetails>
                            回答5回答5回答5回答5回答5回答5回答5回答5回答5回答5回答5回答5回答5回答5
                            回答5回答5回答5回答5回答5回答5回答5
                        </AccordionDetails>
                    </Accordion>
                </Box>

            </Box>
        </>
    )
}
