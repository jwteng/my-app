import React from 'react';
import './upload.css';

class UploadFile extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			file1: '', 
			file2: '',
			msg: ''
		};
	}
	
	//check if file has been uploaded
	onFileChange1 = (event) => {
		this.setState({
			file1: event.target.files[0]
		});
	}

	onFileChange2 = (event) => {
		this.setState({
			file2: event.target.files[0]
		});
	}
	
	uploadFileData = (event) => {
		event.preventDefault();
		this.setState({msg: ''});

		let data = new FormData();
		data.append('file1', this.state.file1);
		data.append('file2', this.state.file2);

		fetch('http://localhost:3000/upload', {
			method: 'POST',
			body: data
		}).then(response => {
			this.setState({msg: "Files successfully uploaded"});
			console.log(this.state.file1);
			console.log(this.state.file2);

		}).catch(err => {
			this.setState({error: err});
		});

	}
	
	render() {
		return (
			<div id="container">
				{/* <h1>PDF Comparison Tool</h1>
				<h3>Select comparison option: &nbsp;
				<select name="comparison" id="comparison">
					<option value="file">File-to-File</option>
					<option value="folder">Folder-to-Folder</option>
					<option value="server">Server-based</option>
				</select></h3> */}

				File #1:&nbsp;				
				<input id='file1' onChange={this.onFileChange1} type="file" accept=".pdf"></input><br/>
				File #2:&nbsp;
				<input id='file2' onChange={this.onFileChange2} type="file"accept=".pdf"></input><br/><br/>
				<button disabled={!this.state.file1 || !this.state.file2} onClick={this.uploadFileData}>Upload</button>
				<h4>{this.state.msg}</h4>
			</div>
	
		)
	}

}

export default UploadFile;