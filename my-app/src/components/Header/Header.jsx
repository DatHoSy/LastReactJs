import styled from "styled-components";
import accIcon from 'assets/img/accountIcon.svg';
import searchIcon from 'assets/img/searchIcon.svg';
import shopingIcon from 'assets/img/shopingIcon.svg';
import { useMediaQuery } from 'react-responsive'

const StyleHeader = styled.div`
    width: ${props => props.width};
    .header {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span.title {
            font-size: 42px;
            line-height: 50px;
            margin-left: 20%;
        }
        ul li{
            display: inline;
            margin-left: 30px;
        }
   }
`

export const Header = ({ width }) => {
    const isPhone = !(useMediaQuery({ query: '(max-width: 425px)' }));
    return (
        <StyleHeader width={width}>
            <div className="header">
                <img src={searchIcon} alt="" />
                <span className="title">Lisa Store</span>
                <div>
                    <ul>
                        <li><img src={accIcon} alt="" /> {isPhone && <span>Account</span>}</li>
                        <li><img src={shopingIcon} alt="" />{isPhone && <span>Shoping</span>}</li>
                    </ul>
                </div>
            </div>
        </StyleHeader>
    );
}