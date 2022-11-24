import React from 'react';

export default class Form extends React.Component {

    state = {
        title: 'JavaScript',
        text: 'Javascript is awesome',
        library: 'React',
        isawsome: true,
    };

    handleChange = (e) => {
        // this.setState({
        //     title: e.target.value,
        //     text: e.target.value
        // })
        if(e.target.type === 'text'){
            this.setState({
                title: e.target.value
            });
        }else if(e.target.type === 'textarea'){
            this.setState({
                text: e.target.value
            });
        }else if(e.target.type === 'select-one'){
            this.setState({
                library: e.target.value
            });
        }else if(e.target.type === 'checkbox'){
            this.setState({
                isawsome: e.target.checked
            });
        }else{
            console.log('Nothing here');
        }
    };

    submitHandler = (e) => {
        const {title, text, library, isawsome} = this.state;
        e.preventDefault();
        console.log(title, text, library, isawsome);
    }

    render() {
        const {title, text, library, isawsome} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input 
                        type="text" 
                        placeholder="Enter your title"
                        value={title}
                        onChange={this.handleChange} 
                    />
                    <br/>
                    <br/>
                    <textarea 
                        name="text" 
                        value={text}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <br/>
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="JavScript">JavaScript</option>
                    </select>
                    <br/>
                    <br/>
                    <input 
                        type="checkbox" 
                        checked={isawsome}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}