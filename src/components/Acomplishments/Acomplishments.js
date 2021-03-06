import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects' },
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal achievements</SectionTitle>
    <Boxes>
      {
        data.map((data, index) => (
          <Box key={index}>
            <BoxNum>{data.number}</BoxNum>
            <BoxText>{data.text}</BoxText>
          </Box>
        ))
      }
    </Boxes>
  </Section>
);

export default Acomplishments;
