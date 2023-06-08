import styled from "styled-components";
import followPro1 from 'assets/img/followPro1.svg';

const StyleFollowPro = styled.div`
    width: ${props => props.width};
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F0F0F0;
    h2 {
        height: 59px;
        font-size: 50px;
        line-height: 59px;
    }

    h4 {
        width: 175px;
        height: 33px;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        color: #FF6F61;
    }

    div {
        display: flex;
        justify-content: space-between;
        gap: 24px;
    }
`

export const FollowPro = ({width}) => {
    return (
        <StyleFollowPro width={width}>
            <h2>Follow products and discounts on Instagram</h2>
            <div>
                <img src={followPro1} alt="followImg" />
                <img src={followPro1} alt="followImg" />
                <img src={followPro1} alt="followImg" />
                <img src={followPro1} alt="followImg" />
                <img src={followPro1} alt="followImg" />
                <img src={followPro1} alt="followImg" />
            </div>
            <h4>@lisa.official</h4>
        </StyleFollowPro>
    )
}