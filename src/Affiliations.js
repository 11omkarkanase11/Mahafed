import React from 'react'
import "./Affiliations.css";
import {Box, Grid,Item} from '@mui/material'; 

function Affiliations() {
  return (
    <div>
        <h3>Affiliation</h3>
            <div className="griditems">
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <Box>
                        <img src="" alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box>Item 2</Box>
                    </Grid>
                </Grid>
            </div>
    </div>
  )
}

export default Affiliations;
