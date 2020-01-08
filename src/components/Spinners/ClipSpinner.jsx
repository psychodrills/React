import React from 'react';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: #000000;
    margin-top: 25%;
`;

class ClipSpinner extends React.Component{
    render(){
        return(
            <div className='sweet-loading'>
                <ClipLoader
                    css={override}
                    sizeUnit={"px"}
                    size={80}
                    color={'#000000'}
                    // loading={this.props.is_loading}
                />
            </div>
        )
    }
}

export default ClipSpinner;
