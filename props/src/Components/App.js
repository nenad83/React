import React from "react";
import {Welcome} from "./Welcome";
import avatar from "../Assets/Images/avatar.jpg"
import {Comment} from "./Comment"
import { HasVacancy } from "./HasVacancy";


export class App extends React.Component {
    render() {
        let user = {
            name: "Nenad Milanovic",
            email: "nenad@gmail.com"
        }

        let author = {
            first_name: "Pero",
            last_name: "Perovski",
            email: "pero@gmail.com",
            image_url: avatar
        }

        let comment = {
            text: "This is simple comment. Lorem ipsum...",
            date: "29/10/2018"
        }

        return (
            <div>
                {/* <Welcome 
                name="Nenad Milanovic" 
                email ="nenad@gmail.com"
                /> */}
                {/* <Welcome user ={user}/> */}
                
                <Comment 
                author = {author} 
                comment = {comment}
                />
                <HasVacancy availability={false} />
            </div>
        )
    }
}