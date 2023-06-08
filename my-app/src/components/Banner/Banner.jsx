import { Button } from "components/Button/Button";
import styled from "styled-components";
import bannerImg1 from 'assets/img/bannerImg1.svg';
import bannerImg2 from 'assets/img/bannerImg2.svg';
import bannerImg3 from 'assets/img/bannerImg3.svg';

const StyleBanner = styled.div`
    height: 847px;
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    div.bannner {
        display: flex;
        justify-content: space-around;
        gap: 30px;
    }

    div.bannner div span.title{
        font-size: 74px;
        line-height: 55px;
    }
    div.bannner div:first-child {
        display: flex;
        align-items: flex-end;
    }

    .groudCollection {
        margin-top: 3%;
        flex-basis: 30%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .groudCollection > p {
        font-size: 30px;
        line-height: 55px;
    }

`

export const Banner = () => {
    return (
        <StyleBanner>
            <div className="bannner">
                <div>
                    <img src={bannerImg1} alt="bannerPhoto" />
                </div>
                <div className="groudCollection">
                    <span className="title">Collections</span>
                    <p>you can explore ans shop many differnt collection from various barands here.</p>
                    <Button isIcon={true} text={'Shop Now'} bgColor={'black'} height={'72px'} width={'223px'} textColor={'white'} lHeight={'34px'} fSize={'29px'}></Button>
                </div>
                <img src={bannerImg2} alt="bannerPhoto" />
                <img src={bannerImg3} alt="bannerPhoto" />
            </div>
        </StyleBanner>
    )
}