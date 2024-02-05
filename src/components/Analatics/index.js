// Analytics.jsx

import React from 'react';
import Styles from './Analytics.module.scss';
import Header from '../layout/header';

const Analytics = () => {
    // Placeholder data for demonstration
    const analyticsData = {
        title: 'Page Analytics',
        shortLink: 'http://short.link/abc123',
        originalLink: 'http://original.link/long-url-abc123',
        totalCount: 1000,
        additionalInfo: [
            { label: 'Visitors', value: 500 },
            { label: 'Bounce Rate', value: '20%' },
            { label: 'Conversion Rate', value: '5%' },
        ],
    };

    return (
        <div>
            <Header title={'Analytics'} isdashboard={true} />
            <div className={Styles['analytics-container']}>
                {/* Left Side - Details */}
                <div className={Styles['details-section']}>
                    <h2>Details</h2>
                    <div className={Styles['info-item']}>
                        <span className={Styles['label']}>Title:</span>
                        <div className={Styles['details-title']}>{analyticsData.title}</div>
                    </div>
                    <div className={Styles['info-item']}>
                        <span className={Styles['label']}>Short Link:</span>
                        <div className={Styles['short-link']}>{analyticsData.shortLink}</div>
                    </div>
                    <div className={Styles['info-item']}>
                        <span className={Styles['label']}>Original Link:</span>
                        <div className={Styles['original-link']}>{analyticsData.originalLink}</div>
                    </div>
                    <div className={Styles['info-item']}>
                        <span className={Styles['label']}>Total Count:</span>
                        <div className={Styles['total-count']}>{analyticsData.totalCount}</div>
                    </div>

                    {/* Additional Info */}
                    <div className={Styles['additional-info']}>
                        {analyticsData.additionalInfo.map((info, index) => (
                            <div className={Styles['info-item']} key={index}>
                                <span className={Styles['label']}>{info.label}:</span>
                                <span className={Styles['value']}>{info.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Analytics Graph */}
                <div className={Styles['graph-section']}>
                    <h2>Analytics Graph</h2>
                    <div className={Styles['line-graph']}>
                        {/* Placeholder for Line Graph */}
                        Line Graph Placeholder
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
