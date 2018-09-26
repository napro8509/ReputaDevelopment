import React from 'react';

import LandingContainer from '../LandingContainer';
import {Slide, Feature, FeatureHeader, FeatureContent} from '../../components';

const featureContent = [
    {
        icon: require('../../assets/media/image/feature-1.svg'),
        title: 'Báo cáo đa chiều',
        desc: [
            'Báo cáo tự động',
            'Báo cáo chủ động theo các vấn đề xã hội',
            'Báo cáo tổng quan sự kiện',
            'Tìm hiểu thị trường',
            'Dữ liệu raw -  dữ liệu xử lý',
            'Độ ảnh hưởng dư luận'
        ]
    },
    {
        icon: require('../../assets/media/image/feature-2.svg'),
        title: 'Cảnh báo đa chiều',
        desc: [
            'Cảnh báo theo ngưỡng tin và thời gian',
            'Cảnh báo các chủ đề quan tâm',
            'Cảnh báo sự kiện quan tâm'
        ]
    },
    {
        icon: require('../../assets/media/image/feature-3.svg'),
        title: 'Nắm bắt dư luận',
        desc: [
            'Tin tức được phân loại cho các lĩnh vực',
            'Tin tức có gán nhãn nhạy cảm',
            'Bộ lọc tin rác',
            'Phân loại xác thực tin tranh cãi teen MXH',
            'Tin tức nổi bật',
            'Dự đoán dư luận xã hội'
        ]
    },
    {
        icon: require('../../assets/media/image/feature-4.svg'),
        title: 'So sánh đối thủ',
        desc: [
            'So sánh với các đối thủ trực tiếp và gián tiếp',
            'So sánh đa chiều trên nhiều lĩnh vực'
        ]
    }
];

class Home extends LandingContainer {

    componentDidMount() {

    }

    _renderContent() {
        return (
            <React.Fragment>
                <Slide/>
                <Feature>
                    <FeatureHeader title="Tính năng nổi bật"
                                   desc="Chúng tôi phân tích các thông tin trên Internet để cung cấp cho khách hàng những giá trị vượt trội"/>

                    {featureContent.map((item, index) => {
                        return <FeatureContent key={index}
                                               title={item.title}
                                               desc={item.desc}
                                               icon={item.icon}
                                               type={index % 2 === 1 ? 'right' : 'left'}/>
                    })}
                </Feature>
            </React.Fragment>
        )
    }
}

export default Home;
