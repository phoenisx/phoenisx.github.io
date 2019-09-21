import { Avatar } from '@ui/avatar';
import { Nav } from '@ui/nav';
import { Typography } from '@ui/typography';
import { MyTheme } from '@utils/interface';
import { navLinks } from '@utils/models/nav-links';
import React from 'react';
import styled, { withTheme } from 'styled-components';

const TopContainer = styled.div`
  align-items: center;
  background: ${(props: MyTheme) => props.theme.colors.darkBlack};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 250px;
  border-bottom: 5px solid ${(props: MyTheme) => props.theme.colors.yellow};
`;

const BottomContainer = styled.div<MyTheme>`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  .profile-avatar-wrapper {
    position: relative;
    transform: translate(0, -51%);
  }

  .about-wrapper {
    margin-top: -90px;
  }
`;

class CProfileDetailsHeader extends React.Component<MyTheme> {
  public render() {
    return (
      <>
        <TopContainer>
          <Nav
            banner={<img height='100%' src='/static/images/logo-small.png' alt="Shub's logo" />}
            bannerUrl='/'
            links={navLinks}
          />
        </TopContainer>
        <BottomContainer>
          <div className='profile-avatar-wrapper'>
            <Avatar
              size={200}
              src='/static/images/profile.png'
              bordered
              color={this.props.theme.colors.yellow}
            />
          </div>
          <div className='about-wrapper'>
            <Typography type='h1' weight='bold'>
              Subroto Biswas
            </Typography>
          </div>
        </BottomContainer>
      </>
    );
  }
}

export const ProfileDetailsHeader = withTheme(CProfileDetailsHeader);
