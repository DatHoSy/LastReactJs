import styled from 'styled-components';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Banner } from 'components/Banner';
import { PopularPro } from 'components/PopularPro/PopularPro';
import { GridPro } from 'components/GridPro';
import { Banner2 } from 'components/Banner2';
import { BestSeller } from 'components/BestSeller/BestSeller';
import { FollowPro } from 'components/FollowPro/FollowPro';
import { Banner3D } from 'components/Banner3D';
let WIDTH = '1320px';
const StyleLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    .banner3d {
        /* width: 1320px; */
        height: 500px;
    }

    @media screen and (max-width: 1024px){
        //card
        .card {
            .imgProd > img{
                width: 225px;
            }
            .title {
                font-size: 14px;
                line-height: 15px;
            }
        }

        // header
        > div:first-child {
            width: 1000px;
        }
        // banner
        > div:nth-child(2) {
            height: 550px;
        }
        div.bannner {
            height: 550px;
        }
        div.bannner > img {
            width: 338px;
        }
        div.bannner > img:last-child {
            width: 185px;
        }
        div.bannner div span.title {
            font-size: 50px;
            line-height: 55px;
        }
        .groudCollection > p {
            font-size: 19px;
            line-height: 47px;
        }
        // brand
        div.brand {
            width: 1000px;
        }
        // pupolar
        > div:nth-child(3) {
            width: 1000px;
        }
        .category {
            margin-left: 50px;
            gap: 17px;
            > div:first-child {
                font-size: 30px;
            }
        }
        .category .bigImgPupolar .imgProd > img {
            width: 467px;
        }
        .category .categoryRight .imgProd > img {
            width: 225px;
        }
        .category .categoryRight {
            gap: 17px;
        }
        .category .categoryRight div {
            gap: 17px;
        }
        // GridProd
        > div:nth-child(4) {
            width: 1000px;
        }

        // Brand 2
        > div:nth-child(5) {
            width: 1000px;
            > img:first-child {
                width: 1010px;
            }
            > img:last-child {
                width: 500px;
            }
            .title {
                gap: 0px;
                top: 12%;
                right: -10%;
                p {
                    font-size: 18px;
                    line-height: 33px;
                    width: 460px;
                    height: 111px;
                }
                button {
                    height: 50px;
                    width: 165px;
                    font-size: 22px;
                }
            }
        }
        
        // BestSeller
        > div:nth-child(6) {
            width: 1000px;
        }
        
        // FollowPro
        > div:nth-child(7) {
            width: 1000px;
            div img {
                width: 105px;
            }
            h2 {
                font-size: 35px;
                line-height: 55px;
            }
        }
        // Footer
         > div:nth-child(8) {
            width: 1000px;
            .infomation{
                width: 1000px;
            }
            .copyRight {
                width: 1024px;
                div {
                    width: 1000px;
                }
            }
        }
        

    }

    @media screen and (max-width: 768px){
        // 768 : 1024
        //card
        .card {
            .imgProd > img{
                width: 168px;
            }
            .title {
                font-size: 11px;
                line-height: 1px;
            }
            .addToCart {
                padding: 0px 5px;
                svg {
                    margin-right: 7px;
                    width: 15px;
                    height: 20px;
                }
                button {
                    width: 100px;
                }
            }
        }

        // header
        > div:first-child {
            width: 750px;
        }
        // banner
        > div:nth-child(2) {
            height: 413px;
        }
        div.bannner {
            height: 413px;
        }
        div.bannner > img {
            width: 253px;
        }
        div.bannner > img:last-child {
            width: 120px;
        }
        div.bannner div span.title {
            font-size: 37px;
            line-height: 39px;
        }
        .groudCollection > p {
            font-size: 14px;
            line-height: 35px;
        }
        .groudCollection > button {
            height: 65px;
            width: 190px;
            font-size: 25px;
        }

        // brand
        div.brand {
            width: 750px;
        }
        div.brand img {
            width: 135px;
        }
        // pupolar
        > div:nth-child(3) {
            width: 750px;
        }
        .category {
            margin-left: 40px;
            gap: 12px;
            > div:first-child {
                font-size: 20px;
                left: -40px;
            }
        }
        .category .bigImgPupolar .imgProd > img {
            width: 350px;
        }
        .category .categoryRight .imgProd > img {
            width: 168px;
        }
        .category .categoryRight {
            gap: 12px;
        }
        .category .categoryRight div {
            gap: 12px;
        }
        // GridProd
        > div:nth-child(4) {
            width: 750px;
            > h2 {
                font-size: 40px;
            }
        }

        // Brand 2
        > div:nth-child(5) {
            width: 768px;
            > img:first-child {
                width: 768px;
            }
            > img:last-child {
                top: -8%;
                width: 375px;
            }
            .title {
                gap: 0px;
                top: 20%;
                right: -27%;
                > img:first-child {
                    width: 135px;
                }
                p {
                    font-size: 12px;
                    line-height: 24px;
                    width: 315px;
                    height: 83px;
                }
                button {
                    height: 34px;
                    width: 120px;
                    font-size: 13px;
                }
            }
        }
        
        // BestSeller
        > div:nth-child(6) {
            width: 750px;
        }
        
        // FollowPro
        > div:nth-child(7) {
            width: 750px;
            div img {
                width: 85px;
            }
            h2 {
                font-size: 25px;
                line-height: 50px;
            }
            h4 {
                font-size: 25px;
                line-height: 50px;
            }
        }
        // Footer
         > div:nth-child(8) {
            width: 750px;
            .infomation{
                width: 750px;
            }
            .copyRight {
                width: 768px;
                div {
                    width: 750px;
                }
            }
        }
        

    }

    @media screen and (max-width: 425px){
        gap: 40px;
        //card
        .listProduct {
                .price > span:first-child {
                    font-size: 13px;
                }
                .priceCurrent {
                    font-size: 11px;
                }
                .priceSale {
                    font-size: 11px;
                    margin-left: 3px;
                }
        }
        .card {
            .imgProd > img{
                width: 130px;
            }
            .discount {
                font-size: 11px;
                width: 38px;
                height: 17px;
                top: 10px;
            }
            .title {
                font-size: 6px;
                line-height: 1px;
            }
            .addToCart {
                svg {
                    margin-right: 5px;
                    width: 10px;
                    height: 15px;
                }
                button {
                    width: 70px;
                    font-size: 9px;
                }
            }
        }

        // header
        > div:first-child {
            width: 412px;
            .header {
                span {
                    font-size: 25px;
                    line-height: 25px;
                    margin-left: 10%;
                }
                ul {
                    margin: 0;
                    padding: 0;
                }

                ul li {
                    margin-left: 10px;
                }

            }
        }

        // banner
        > div:nth-child(2) {
            height: 226px;
            
        }
        div.bannner {
            height: 226px;
            gap: 15px;
        }
        div.bannner div > img {
            width: 65px;
        }
        div.bannner > img {
            width: 130px;
        }
        div.bannner > img:last-child {
            width: 65px;
        }
        div.bannner div span.title {
            font-size: 20px;
            line-height: 21px;
        }
        .groudCollection {
            margin-top: 10%;
            gap: 10px;
        }
        .groudCollection > p {
            font-size: 8px;
            line-height: 19px;
        }
        .groudCollection > button {
            height: 36px;
            width: 105px;
            font-size: 13px;
            svg {
                margin-right: 5px;
                width: 20px;
                height: 20px;
            }
        }

        // brand
        div.brand {
            width: 412px;
            margin-bottom: 30px;
        }
        div.brand img {
            width: 74px;
        }
        // pupolar
        > div:nth-child(3) {
            width: 412px;
        }
        .category {
            margin-left: 22px;
            gap: 7px;
            > div:first-child {
                font-size: 11px;
                left: -30px;
                height: 21px;
                bottom: 0;
            }
        }
        .category .bigImgPupolar .imgProd > img {
            width: 192px;
        }
        .category .categoryRight .imgProd > img {
            width: 92px;
        }
        .category .categoryRight {
            gap: 7px;
        }
        .category .categoryRight div {
            gap: 7px;
        }
        // GridProd
        > div:nth-child(4) {
            width: 412px;
            > h2 {
                font-size: 28px;
            }
            .listProduct {
                gap: 0 ;
            }
        }
        // navContent
        div.navContent {
            ul li {
                margin-right: 11px;
            }
        }

        // Brand 2
        > div:nth-child(5) {
            width: 425px;
            > img:first-child {
                width: 425px;
            }
            > img:last-child {
                top: -5%;
                width: 206px;
                height: 140px;
            }
            .title {
                gap: 0px;
                top: 11%;
                right: 0;
                width: 170px;
                > img:first-child {
                    width: 74px;
                }
                p {
                    font-size: 7px;
                    line-height: 13px;
                    width: 173px;
                    height: 46px;
                }
                button {
                    height: 18px;
                    width: 66px;
                    font-size: 7px;
                }
            }
        }
        
        // BestSeller
        > div:nth-child(6) {
            width: 412px;
            h2 {
                font-size: 28px;
                line-height: 35px;
            }
            .productSale {
                gap: 15px;
                flex-wrap: wrap;
            }
            .card {
                .imgProd > img{
                    width: 195px;
                }
                .title {
                    font-size: 11px;
                    line-height: 5px;
                }
            }
        }
        
        // FollowPro
        > div:nth-child(7) {
            width: 412px;
            div img {
                width: 47px;
            }
            h2 {
                text-align: center;
                font-size: 23px;
                line-height: 25px;
            }
            h4 {
                font-size: 23px;
                line-height: 15px;
            }
        }
        // Footer
        > div:nth-child(8) {
            width: 412px;
            .infomation{
                width: 412px;
            }
            .copyRight {
                width: 425px;
                div {
                    width: 412px;
                    img {
                        width: 130px;
                    }
                }
            }
        }
        

    }
`
export const Layout = () => {
    return (
        <StyleLayout>
            <Header width={WIDTH}></Header>
            <Banner3D></Banner3D>
            <Banner></Banner>
            <PopularPro width={WIDTH}></PopularPro>
            <GridPro width={WIDTH}></GridPro>
            <Banner2></Banner2>
            <BestSeller width={WIDTH}></BestSeller>
            <FollowPro width={'1920px'}></FollowPro>
            <Footer width={WIDTH}></Footer>
        </StyleLayout>
    )
}