import React, { Component } from "react";
import styled from "styled-components";
import { Wrapper } from "../defaults";
import SiteOptions from "../siteOptions/SiteOptions";
import Menu from "../menu/Menu";
import FooterMenu from "../footerMenu/FooterMenu";
import FooterSocial from "../footerSocial/FooterSocial";
import FooterCopy from "../footerCopy/FooterCopy";

const FooterBox = styled.footer`
  background: #ffffff;
  -webkit-box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  -moz-box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

const FooterBody = styled.div`
  padding: 16px 0 24px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.08);
  margin: 0 0 16px;
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    padding: 48px 0 38px;
    margin: 0 0 32px;
  }
  @media (min-width: 1200px) {
    padding-bottom: 48px;
  }
`;

const FooterTools = styled.div`
  display: flex;
  align-items: center;
`;

const FooterFoot = styled.div`
  padding: 0 0 16px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 44px;
  }
  @media (min-width: 1200px) {
    padding: 0 0 34px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterBox>
        <Wrapper>
          <FooterBody>
            <SiteOptions />
            <Menu />
          </FooterBody>
          <FooterFoot>
            <FooterCopy />
            <FooterTools>
              <FooterMenu />
              <FooterSocial />
            </FooterTools>
          </FooterFoot>
        </Wrapper>
      </FooterBox>
    );
  }
}

export default Footer;
