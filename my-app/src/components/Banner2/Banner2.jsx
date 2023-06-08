import { Button } from "components/Button/Button";
import styled from "styled-components";
import bannerImg4 from 'assets/img/bannerImg4.svg';
import zara from 'assets/img/zara.svg';
import zaraBg from 'assets/img/zaraBg.svg';

const StyleBanner = styled.div`
    > img {
        width: 1920px;
    }
    position: relative;
    div.title {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 55px;
        top: 20%;
        right: 15%;
        width: 540px;
        img.title {
            width: 191px;
            height: 81px;
        }
        p {
            color: #FF6F61;
            font-size: 26px;
            line-height: 40px;
            width: 504px;
            height: 187px;
            /* line-height: 131%; */
        }
    }
    .zaraBg {
        position: absolute;
        top: 5%;
        right: 0;
        width: 732px;
        height: 309px;
    }
`

export const Banner2 = () => {
    return (
        <StyleBanner>
            <img src={bannerImg4} alt="bannerPhoto" />
            <div className="title">
                <img className="title" src={zara} alt="bannerPhoto" />
                <p>
                    Lustrous yet understated. The new evening
                    wear collection exclusively offered at the
                    reopened Giorgio Armani boutique in Los Angeles.
                </p>
                <Button text={'See Collection'} bgColor={'white'} height={'72px'} width={'223px'} textColor={'black'} lHeight={'34px'} fSize={'29px'}></Button>
            </div>
            <img className="zaraBg" src={zaraBg} alt="bannerPhoto" />
        </StyleBanner>
    )
}