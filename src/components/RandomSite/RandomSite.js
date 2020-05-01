import React, { Component } from 'react';
import './RandomSite.scss';
import ApiService from "../../services/api-service";

export default class RandomSite extends Component {

    apiService = new ApiService();

    state = {
        site: null,
        ip: null,
        activity: null,
        image: null
    };

    updateSite() {
        this.apiService.getSiteById(Math.floor(Math.random()*10)+1)
            .then((site) => {
                this.setState({
                    site: site.site,
                    ip: site.ip,
                    activity: site.activity,
                    image: site.image
                });
            });
    }

    constructor(props) {
        super(props);

        this.updateSite();
    }

    render() {
        const { site, ip, activity, image } = this.state;

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
                    <p>Site Activity <span>{ activity }</span></p>
                </div>
            </div>
        );
    };
};
