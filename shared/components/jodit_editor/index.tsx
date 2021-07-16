import React from "react";


import 'jodit';
import 'jodit/build/jodit.min.css';

import JoditEditor from "jodit-react";

class Jodit_Editor extends JoditEditor  {
  constructor(props) {
    super(props,1);
    this.state = {
      content: 'content',
    }
  }
  updateContent = (value) => {
    this.setState({content:value})
}
   /**
     * @property Jodit jodit instance of native Jodit
     */
	jodit;
	setRef = jodit => this.jodit = jodit;
	
	config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
    render() {
        return (
            <JoditEditor
            	
                value={this.state.content} 
                onChange={this.updateContent}
            />
        );
    }
}