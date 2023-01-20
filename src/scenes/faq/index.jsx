import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />
            <Accordion defaultExpanded sx={{backgroundColor: colors.primary[400]}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{backgroundColor: colors.primary[400]}}>
                    <Typography color={colors.greenAccent[500]}  variant="h5">
                        Question #01
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quod voluptatum earum aspernatur amet ipsam nostrum ipsa quasi,
                        quae beatae esse nulla, dolorem libero sint debitis 
                        dolorum ut similique. Ea, fugiat.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{backgroundColor: colors.primary[400]}}>

                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{backgroundColor: colors.primary[400]}}>
                    <Typography color={colors.greenAccent[500]}  variant="h5">
                        Question #02 
                    </Typography>
                </AccordionSummary>
                
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quod voluptatum earum aspernatur amet ipsam nostrum ipsa quasi,
                        quae beatae esse nulla, dolorem libero sint debitis 
                        dolorum ut similique. Ea, fugiat.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{backgroundColor: colors.primary[400]}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{backgroundColor: colors.primary[400]}}>
                    <Typography color={colors.greenAccent[500]}  variant="h5">
                        Question #03
                    </Typography>
                </AccordionSummary>
                
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quod voluptatum earum aspernatur amet ipsam nostrum ipsa quasi,
                        quae beatae esse nulla, dolorem libero sint debitis 
                        dolorum ut similique. Ea, fugiat.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;