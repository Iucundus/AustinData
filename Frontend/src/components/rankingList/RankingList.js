import React, { Component } from 'react';
import ZipCodeComponent from '../zipcode/ZipCodeComponent'
class RankingList extends Component {

    getRankingCard = () => {
        return this.props.data.map( (zipcode) => {
            return (
                <div className="col-lg-6" key={zipcode.zipcode}>
                    <ZipCodeComponent zipcode={zipcode}/>
                </div>
            )
        })
    }
    
    render() {

        return(
            <div>
                <div className="row">
                    {this.getRankingCard()}
                </div>
            </div>
        )
  }
}

export default RankingList;
