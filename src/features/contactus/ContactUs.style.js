import styled from 'styled-components';
import BannerBGimage from '../../assets/images/banner_1.png';
import ListIcon from '../../assets/svg/list-icon.svg';
import hoverBox1 from '../../assets/images/hover-box1.png';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import RightArrow from '../../assets/svg/right-arrow.svg';

export const ContactPage = {OuterDiv: styled.div``,
    ContactBanerSec:styled.section`
        padding: 80px 0 60px;
        h2 {
            font-size: 38px;
            font-weight: 700;
            color: #252525;
            margin: 0 0 15px;

            @media (max-width: 767px) {
                font-size: 28px;
            }
        }
        p {
            font-size: 20px;
            color: #252525;
            margin: 0 0;
            @media (max-width: 767px) {
                font-size: 18px;
            }
        }
        @media (max-width: 767px) {
            padding: 30px 0;
        }
    `,
    ContactFormSec:styled.section`
        padding: 60px 0;
        background-color: #F5F6FF;
        h2 {
            font-size: 38px;
            font-weight: 700;
            color: #252525;
            margin: 0 0 15px;
        }
        p {
            font-size: 20px;
            color: #252525;
            margin: 0 0 15px;
        }
        @media (max-width: 767px) {
            padding: 30px 0;
        }
    `,
    ContactFormBox:styled.form`
        border: 2px solid #ffffff;
        background: #ffffff;
        border-radius: 10px;
        padding: 25px 30px 35px;

        h2 {
            font-size: 26px;
            font-weight: 600;
            margin-bottom: 5px;
        }
        h3 {
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 25px;
        }
        .form-control {
            border: 1px solid #929292;
            color: #585858;
        }
        @media (max-width: 767px) {
            padding: 25px 20px;
        }
    `,
    ContactText:styled.div`

        h2 {
            font-size: 38px;
            font-weight: 700;
            color: #252525;
            margin: 0 0 15px;
            @media (max-width: 767px) {
                font-size: 28px;
            }
        }
        p {
            font-size: 16px;
            color: #252525;
            margin: 0 0 25px;
        }
        
    `,
    ContactTextBox:styled.div`
        display: flex;
        align-items: center;
        margin: 0 0 20px;

        a {
            color: #252525 !important;
            text-decoration: none;

            &:hover {
                color: #2B2D94 !important;
            }
        }
        img {
            width: 100%;
            max-width: 50px;
        }
        p {
            width: calc(100% - 52px);
            padding-left: 20px;
            margin: 0;
            color: #252525;
        }
    `,
    ContactFormMap:styled.div`
        iframe {
            width: 100% !important;
            height: 400px !important;
            margin: 0px !important;
            padding: 0px !important;
            margin-bottom: -7px !important;
        }
    `,
}
