import React, { Component } from 'react'

export class Greet extends Component {

    constructor(props)
    {
        super(props)
    }
    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"e6aa491508eff69480f1692367598884","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
    render() {
        return (
            <div>
                <h1>Welcome</h1>
            </div>
        )
    }
}

export default Greet
