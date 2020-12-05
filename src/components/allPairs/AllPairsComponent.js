import React, {Component} from 'react';
import {princes, princesses} from "../../data";
import PairComponent from "../pair/PairComponent";



class AllPairsComponent extends Component {

//      pairs = [];
//     findPair = (princes, princesses) => {
//
//
//         for(const prince of princes ){
//             let pair = [{}];
//             let princess = princesses.find(princess => princess.footSize === prince.sizeShoe);
//             pair.push({prince}, {princes});
//
//             this.pairs.push(pair);
//         }
//         // console.log(pairs);
//         // return pairs;
// }
    //state = {foundPrincess : null};
    findShoes = (sizeShoe) => {
        return princesses.find(value => value.footSize === sizeShoe);
        //this.setState({foundPrincess})

    }

    render() {
       // let pairs = this.findPair(princes, princesses);
       //  console.log(pairs);
        // pairs.map((value, index) => (<PairComponent item = {value} key = {index}/>))

        return (
            <div>
                {

                    princes.map((value, index) => {
                        let foundPrincess = this.findShoes(value.sizeShoe);
                          return  <PairComponent item = {value} key = {index} princess = {foundPrincess}/>

                    })

                }
            </div>
        )
    }
}

export default AllPairsComponent;