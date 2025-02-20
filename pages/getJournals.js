import React from 'react';
import { getJournal } from '../lib/viewJournal';

class getJournals extends React.Component {
	constructor(props) {
		super(props);
		this.state = {id: 0};
	}

	handleUpdate(evt) {
		this.setState({id: evt.target.value});
	}

	async handleId(evt) {
		const post = await getJournal(this.state.id);
		console.log(post);
		this.setState({ post: post.success[0] });
	}



	render() {
		return (
			<div>
			<h1>Enter the post</h1>
			
				<p><input type="text" value={this.state.id} onChange={this.handleUpdate.bind(this)} /></p>
				<button className="button-style" onClick={this.handleId.bind(this)}>Search</button>

				{this.state.post ? <div> 
					<p>{this.state.post.entry_body}</p>
				</div> : <p></p>}

			</div>

		)
	}
}

export default getJournals;