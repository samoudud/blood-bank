import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import faq from '../../images/faq.jpg'

const Faq = () => {
    return (
        <div className='Faq'>
            <Container>
                <Typography sx={{ color: '#18183A', margin: '40px 0', fontSize: '36px', fontWeight: '700' }} variant="h3" component="div" >
                    Frequently Asked Questions
                </Typography>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img width="100%" src={faq} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>How does the blood donation process work?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Donating blood is a simple thing to do, but can make a big difference in the lives of others. The donation process from the time you arrive until the time you leave takes about an hour. The donation itself is only about 8-10 minutes on average
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>What should I do after donating blood?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Drink an extra four glasses (eight ounces each) of non-alcoholic liquids.
                                        Keep your bandage on and dry for the next five hours, and do not do heavy exercising or lifting.
                                        If the needle site starts to bleed, raise your arm straight up and press on the site until the bleeding stops.
                                        Because you could experience dizziness or loss of strength, use caution if you plan to do anything that could put you or others at risk of harm. For any hazardous occupation or hobby, follow applicable safety recommendations regarding your return to these activities following a blood donation.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Will it hurt when you insert the needle?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Only for a moment. Pinch the fleshy, soft underside of your arm. That pinch is similar to what you will feel when the needle is inserted.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Questions About Donating Blood</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The entire process takes about one hour and 15 minutes; the actual donation of a pint of whole blood unit takes eight to 10 minutes. However, the time varies slightly with each person depending on several factors including the donor’s health history and attendance at the blood drive.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>How long will it take to replenish the pint??</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The plasma from your donation is replaced within about 24 hours. Red cells need about four to six weeks for complete replacement. That’s why at least eight weeks are required between whole blood donations.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>How often can I donate blood?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        You must wait at least eight weeks (56 days) between donations of whole blood and 16 weeks (112 days) between Power Red donations. Whole blood donors can donate up to 6 times a year. Platelet apheresis donors may give every 7 days up to 24 times per year. Regulations are different for those giving blood for themselves (autologous donors).
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Who can donate blood?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        In most states, donors must be age 17 or older. Some states allow donation by 16-year-olds with a signed parental consent form. Donors must weigh at least 110 pounds and be in good health. Additional eligibility criteria apply.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Faq;