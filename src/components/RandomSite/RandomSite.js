import React, { Component } from 'react';
import './RandomSite.scss';
import ApiService from "../../services/api-service";

export default class RandomSite extends Component {

    apiService = new ApiService();

    state = {
        site: {}
    };

    randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    onSiteUpdate = (site) => {
        this.setState({ site });
    }

    updateSite() {
        this.apiService.getSiteById(this.randomInt(1, 10))
            .then(this.onSiteUpdate);
    }

    constructor(props) {
        super(props);

        this.updateSite();
    }

    render() {
        const { site: { site, ip, activity, image } } = this.state;

        return (
            <div className={'random-site-wrapper'}>
                <img
                    className={'site-image'}
                    src={`${image}`}
                    alt=""
                />

                <div className="site-info ml-3">
                    <p>Site Url: <span>{ site }</span></p>
                    <p>Site Ip: <span>{ ip }</span></p>
                    <p>Site Activity: <span>{ activity }</span></p>
                </div>
            </div>
        );
    };
};
