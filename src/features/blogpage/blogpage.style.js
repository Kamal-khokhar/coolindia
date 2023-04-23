import styled from 'styled-components';
import BannerBGimage from '../../assets/images/banner_1.png';

export const blogpagecss = {OuterDiv: styled.div``,
    blogBanerSec:styled.section`
        padding: 100px 0 80px;
        h2 {
            font-size: 36px;
            font-weight: 700;
            color: #252525;
            margin: 0 0 15px;
            @media (max-width: 767px) {
                font-size: 24px;
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
    blogMainSec:styled.section`
        width: 100%;
        padding: 40px 0 80px;
        text-align: left;
        
        p.card-text {
            min-height: 180px;
        }
        .card-title {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: auto !important;
        }
        .card-text {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: auto !important;
        }
        @media (max-width: 767px) {
            padding: 40px 0 30px;
        }
    `,
}