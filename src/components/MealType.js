import React from 'react';

 class MealType extends React.Component {

	render() {

		return (

			<button className={this.props.name} key={this.props.id} onClick={this.props.handlerProp}>{this.props.display}</button>

		)

	}

 }

 export default MealType;