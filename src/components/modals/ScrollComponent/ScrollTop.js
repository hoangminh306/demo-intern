import React, { Component } from 'react'
import $ from 'jquery'
export default class ScrollTop extends Component {
    handleOnclick =()=>{
        $('.modal.show').scrollTop(0,300);
    }
    render() {
        const buutonStyle = {
            position: 'fixed',
            bottom: '40px',
            zIndex: '2055',
            background: '#0b0bef85',
            right: '127px',
            width: '40px',
            lineHeight: '40px',
            height: '40px',
            textAlign: 'center',
            color: 'white',
            border: '1px solid bisque',
            borderRadius: '50%',
            fontSize: '20px'
        }
        return (
            <div>
                <a id="top-btn" href="javascript:void(0);" onClick={this.handleOnclick} style={buutonStyle}>
                    <i aria-hidden="true" className="fa fa-arrow-up"></i>
                </a>
            </div>
        )
    }
}
