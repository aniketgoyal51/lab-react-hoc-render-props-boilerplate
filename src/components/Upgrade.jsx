import React from 'react'

const Upgrade=(OriginalComponent)=>{
    class Count extends React.Component {
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        increment=()=>{
            this.setState(prevstate=>{
                return{count: prevstate.count+1}
            }
            )
        }
    render() {
        return (
        <OriginalComponent
        count={this.state.count}
        increment={this.increment}/>
        )
    }
    }
    return Count
}
export default Upgrade