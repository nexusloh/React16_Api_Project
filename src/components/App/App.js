import React, { Component } from 'react';

//components
import Header from "../Header/Header";
import ItemsList from "../ItemsList/ItemsList";
import SitesDetails from "../SitesDetails/SitesDetails";
import RandomSite from "../RandomSite/RandomSite";

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header />
                    <RandomSite />

                    <div className={'row'}>
                        <div className={'col-md-6'}>
                            <ItemsList />
                        </div>
                        <div className={'col-md-6'}>
                            <SitesDetails />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
