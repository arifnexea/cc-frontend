import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Box, Card, Stack, Avatar, Button, ListItemText } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

const CampaignDetailCreator = ({ campaign }) => {
  // eslint-disable-next-line no-unused-vars
  const [dawd, sdaw] = useState();
  const router = useRouter();

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: 'repear(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
      gap={2}
    >
      {campaign?.ShortListedCreator.map((elem, index) => (
        <Box key={index} component={Card} p={2} position="relative">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar src={elem?.creator?.photoURL} sx={{ width: 60, height: 60 }}>
              {elem.creator?.name[0]}
            </Avatar>
            <ListItemText primary={elem.creator?.name} secondary={elem.creator?.email} />
          </Stack>

          <Button
            sx={{
              position: 'absolute',
              bottom: 10,
              right: 10,
            }}
            size="small"
            color="success"
            variant="contained"
            onClick={() => {
              router.push(paths.dashboard.campaign.manageCreator(campaign?.id, elem?.creator?.id));
            }}
          >
            Manage
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default CampaignDetailCreator;

CampaignDetailCreator.propTypes = {
  campaign: PropTypes.object,
};
