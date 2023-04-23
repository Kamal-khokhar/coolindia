import styled from 'styled-components';
import bannerBg from '../../assets/images/gallery-bg.jpg';


export const gallerpagecss = {OuterDiv: styled.div``,
    galleryBanerSec:styled.section`
        padding: 60px 0;
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url(${bannerBg});

        &:before {
            position: absolute;
            content: '';
            background: #000;
            opacity: 0.5;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 0;
        }
        .row {
            position: relative;
            z-index: 9;
        }
        h2 {
            font-size: 38px;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 25px;
            @media (max-width: 767px) {
                font-size: 28px;
            }
        }
        p {
            font-size: 16px;
            color: #ffffff;
            margin: 0;
            @media (max-width: 767px) {
                font-size: 14px;
            }
        }
        @media (max-width: 767px) {
            padding: 30px 0;
        }
    `,
    gallerySec:styled.section`
        padding: 60px 0;
        position: relative;

        h2 {
            font-size: 34px;
            font-weight: 700;
            color: #000000;
            margin: 0 0 20px;
            @media (max-width: 767px) {
                font-size: 24px;
            }
        }
        p {
            font-size: 16px;
            color: #000000;
            margin: 0;
            @media (max-width: 767px) {
                font-size: 14px;
            }
        }
        @media (max-width: 767px) {
            padding: 30px 0;
        }    
    `,
}