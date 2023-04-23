import styled from 'styled-components';
import BannerBGimage from '../../assets/images/banner_1.png';

export const CoolfooterStyle = {OuterDiv: styled.div``,
    FooterMain:styled.footer`
        background: #2B2D94;
        padding: 60px 0 0;
        color: #ffffff !important;
        font-family: Poppins, sans-serif !important;
        text-align: left;

        .FooterCopyRightRow {
            border-top: 1px solid #ffffff;
            padding: 10px 0;
            margin-top: 20px;   
        }
    `,
    FooterFirstCol:styled.div`
        a {
            display: block;
            margin: 0 0 30px;
            color: #ffffff !important;
        }
        img {
            width: 100%;
            max-width: 170px;
        }
        p {
            font-size: 16px;
            line-height: 28px;
            font-weight: 300;
        }
    `,
    FooterSecondCol:styled.div`
        h4 {
            font-size: 22px;
            font-weight: 600;
            margin: 32px 0 60px;
        }
        a {
            color: #ffffff !important;
            text-decoration: none;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            font-size: 16px;
            font-weight: 300;
            margin: 0 0 10px;
        }
        @media (max-width: 767px) {
            h4 {
                margin: 20px 0;
            }
        }
    `,
    FooterThirdCol:styled.div`
        h4 {
            font-size: 22px;
            font-weight: 600;
            margin: 32px 0 60px;
        }
        a {
            color: #ffffff !important;
            text-decoration: none;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            font-size: 16px;
            font-weight: 300;
            margin: 0 0 10px;
        }
        @media (max-width: 767px) {
            h4 {
                margin: 20px 0;
            }
        }    
    `,
    FooterFourthCol:styled.div`
        h4 {
            font-size: 22px;
            font-weight: 600;
            margin: 32px 0 60px;
        }
        a {
            color: #ffffff !important;
            text-decoration: none;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            font-size: 16px;
            font-weight: 300;
            margin: 0 0 10px;
        }
        @media (max-width: 767px) {
            h4 {
                margin: 20px 0;
            }
        }    
    `,
    FooterCopyRight:styled.div`
    text-align: ${props => props.align ? props.align : 'left'};
    p {
        font-size: 16px;
        font-weight: 300;
        margin: 0;
    }
    img {
        width: 30px;
        margin: 5px;
    }
    `,
}