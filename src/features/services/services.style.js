import styled from 'styled-components';
import BannerBGimage from '../../assets/images/banner_1.png';


export const servicesMain = {OuterDiv: styled.div``,
    servicesSec:styled.section`
        padding: 100px 0 60px;
        h2 {
            font-size: 38px;
            font-weight: 700;
            color: #252525;
            margin: 0 0 20px;
            @media (max-width: 767px) {
                font-size: 28px;
            }
        }
        p {
            font-size: 16px;
            color: #252525;
            margin: 0 0 15px;
            @media (max-width: 767px) {
                font-size: 14px;
            }
        }
        @media (max-width: 767px) {
            padding: 40px 0 20px;
        }
    `,
    requirementSec:styled.section`
        padding: 30px 0 60px;
        background-color: #fff;
        background-image: url(${props => props.BackgroundImg ? props.BackgroundImg : ''});
        background-repeat: no-repeat;
        background-position: left center;
        background-size: auto;

        h2 {
            font-size: 38px;
            font-weight: 700;
            color: #000000;
            margin: 0 0 30px;
            @media (max-width: 767px) {
                font-size: 28px;
                margin: 0 0 20px;
            }
        }
        h3 {
            font-size: 34px;
            font-weight: 700;
            color: #000000;
            margin: 0 0 20px;
            @media (max-width: 767px) {
                font-size: 28px;
            }
        }
        p {
            font-size: 16px;
            color: #000000;
            margin: 0 0 15px;
            @media (max-width: 767px) {
                font-size: 14px;
            }
        }
        @media (max-width: 767px) {
            padding: 30px 0 20px;
        }
    `,
    productSec:styled.section`
        padding: 60px 0 0;

        h2 {
            font-size: 36px;
            line-height: normal;
            font-weight: 700;
            color: rgb(0, 0, 0);
            margin: 0;
        }
        @media (max-width: 991px) {
            padding: 30px 0 0;
            h2 {
                font-size: 24px;
            }
        }
        @media (max-width: 767px) {
            padding: 30px 0 0;
            h2 {
                font-size: 22px;
            }
        }
    `,
}