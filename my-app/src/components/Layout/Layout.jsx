import styled from 'styled-components';
// import { Header } from 'components/Header/Header';
// import { Footer } from 'components/Footer/Footer';
// import { Banner } from 'components/Banner';
// import { PopularPro } from 'components/PopularPro/PopularPro';
// import { GridPro } from 'components/GridPro';
// import { Banner2 } from 'components/Banner2';
// import { BestSeller } from 'components/BestSeller/BestSeller';
// import { FollowPro } from 'components/FollowPro/FollowPro';
// import { Banner3D } from 'components/Banner3D';

const StyleLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
`
export const Layout = ({children}) => {
    return (
        <StyleLayout>
            {children}
            {/* <Header width={WIDTH}></Header>
            <Banner></Banner>
            <PopularPro width={WIDTH}></PopularPro>
            <GridPro width={WIDTH}></GridPro>
            <Banner2></Banner2>
            <BestSeller width={WIDTH}></BestSeller>
            <FollowPro width={'1920px'}></FollowPro>
            <Footer width={WIDTH}></Footer> */}
        </StyleLayout>
    )
}