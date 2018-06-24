import React from 'react';
import NavMenu from './NavMenu';

export default props => (
    <div>
    <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#">Design Group</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
    </header>
    <div className="container-fluid">
        <div className="row">
            <nav class="col-md-2 navbar navbar-expand-lg navbar-light bg-light">
                <NavMenu />
            </nav>
            <main className="col-md-9">
                {props.children}
            </main>
        </div>
        </div>
    </div>
);
