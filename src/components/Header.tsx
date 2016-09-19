import * as React from "react";

export interface HelloProps{
    width:string;
    height:string;
    bg:string;
}

export class Navigator extends React.Component<HelloProps,{}>{


    render(){


        let style = {
            height:this.props.height,
            width:'',
            background:''
        };

        if(this.props.width){
            style.width = this.props.width;
        }
        if(this.props.bg){
            style.background = this.props.bg;
        }

        return (
            <header style={style}></header>
        );

    }


}