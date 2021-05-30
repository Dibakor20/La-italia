import React, {Component} from 'react';
import DishDetails from '../DishDetails/DishDetails';
import MenuItem from '../MenuItem';
import {CardColumns,Modal,ModalBody,ModalFooter,Button} from 'reactstrap'
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false,
    }

    onDishSelect = dish =>{
        this.setState({ 
            selectedDish: dish,
            modalOpen : !this.state.modalOpen
        })
    } 

    toggleModal = () =>{
        this.setState({
            modalOpen : !this.state.modalOpen
        })
    }

    render() {
        const menu = this.props.dishes.map(item=>{
            return (
                <MenuItem dish={item}
                key={item.id}
                 DishSelect={()=>this.onDishSelect(item)}
                />
            );
        })

        let dishDetails = null
        if(this.state.selectedDish != null){
            const comments = this.props.comments.filter(comment=> 
             comment.dishId === this.state.selectedDish.id
            )
            dishDetails = <DishDetails dish={this.state.selectedDish}
            comments={comments}
            />
        }

        return (
            <div className="container mb-5" id="menu">
                <h1 className="text-center mt-5 mb-5">Menu</h1>
                <div className="row">
                   <CardColumns>
                       {menu}
                   </CardColumns>
                   <Modal isOpen={this.state.modalOpen}>
                       <ModalBody>
                           {dishDetails}
                       </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-secondary" onClick={this.toggleModal}>Close</button>
                        </ModalFooter>
                   </Modal>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps) (Menu);