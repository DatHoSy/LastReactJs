import styled from "styled-components";
import {ReactComponent as ShopingIcon} from 'assets/img/shopingIcon.svg';

const StyleButton = styled.button`
    background: ${props => props.bgColor};
    color: ${props => props.textColor};
    height: ${props => props.height};
    width: ${props => props.width};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.fSize};
    line-height: ${props => props.lHeight};
    cursor: pointer;
    svg {
        margin-right: 15px;
        width: 29px;
        height: 29px;
        path {
            fill: white;
        }
    }
`

export const Button = ({ text, isIcon, bgColor, textColor, height, width, fSize, lHeight}) => {
    return (
        <StyleButton bgColor={bgColor} textColor={textColor} height={height} width={width} fSize={fSize} lHeight={lHeight}>
            {isIcon && <ShopingIcon/>}
            {text}
        </StyleButton>
    )
}

Button.defaultProps = {
    text: 'Button',
    bgColor: null,
    onClick: undefined,
};
