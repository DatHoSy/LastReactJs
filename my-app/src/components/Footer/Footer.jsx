import styled from "styled-components";
import footerIcon from 'assets/img/footerIcon.svg';
import facebookIcon from 'assets/img/facebookIcon.svg';
import twitterIcon from 'assets/img/twitterIcon.svg';
import linkedInIcon from 'assets/img/linkedInIcon.svg';
import instagramIcon from 'assets/img/instagramIcon.svg';
import { Button } from "components/Button/Button";

const StyleFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    .infomation {
        display: flex;
        justify-content: space-between;
        width: ${props => props.width};
    }
    .infomation > div {
        flex-basis: 25%;
    }
    .infoIndex {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    div.copyRight {
        width: 1920px;
        background-color: black;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    div.copyRight div {
        width: ${props => props.width};
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            color: white;
        }
    }
    div.inforIcon img {
        margin-right: 10%;
    }
`

export const Footer = ({ width }) => {
    return (
        <StyleFooter width={width}>
            <div className="infomation">
                <div>
                    <span>Lisa</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua
                    </p>
                    <div className="inforIcon">
                        <img src={facebookIcon} alt="facebookIcon" />
                        <img src={twitterIcon} alt="twitterIcon" />
                        <img src={linkedInIcon} alt="linkedInIcon" />
                        <img src={instagramIcon} alt="instagramIcon" />
                    </div>
                </div>
                <div className="infoIndex">
                    <span>CATALOG</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                </div>
                <div className="infoIndex">
                    <span>CATALOG</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                </div>
                <div className="infoIndex">
                    <span>CUSTOMER SERVICES</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                    <span>Necklaces</span>
                </div>
            </div>
            <div className="copyRight">
                <div>
                    <span>@ 2023 USA, inc.</span>
                    <img src={footerIcon} alt="footerPhoto" />
                    <Button text={'Scroll To Top'} bgColor={'transparent'} textColor={'white'}></Button>
                </div>
            </div>
        </StyleFooter>
    );
}