import React, { Component } from 'react';

const ProgressBar = ({ isLoading, isSaving }) => {

    const doShow = (isLoading === undefined ? false : isLoading) || (isSaving === undefined ? false : isSaving)
    //console.log(isSaving);
    return (
        doShow &&
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    );
}

export default ProgressBar;