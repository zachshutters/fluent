import React from 'react';
import FluidContainer from '../components/FluidContainer';
import { Grid } from 'semantic-ui-react'
import MainSideMenu from '../components/MainSideMenu';
import MainHeaderMenu from '../components/MainHeaderMenu';
import TextContainer from '../components/TextContainer';

const HomePage = (props) => {

    return (
        <FluidContainer>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <MainHeaderMenu />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        
                    </Grid.Column>
                    <Grid.Column width={12}>
                        > Under Development ...
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </FluidContainer>
    );
};

export default HomePage;