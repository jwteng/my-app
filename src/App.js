import axios from 'axios'; 

// https://www.geeksforgeeks.org/file-uploading-in-react-js/

import React,{Component} from 'react'; 
import UploadFile from './components/UploadFile';
import UploadFolder from './components/UploadFolder';
import ServerBased from './components/ServerBased';

  
class App extends Component { 
   
    state = {  
      // Initially, no file/option is selected 
      selectedFile: null,
      selectedOption: null
    }; 
     
    //store selected comparison method
    onOptionChange = (event) => {
      this.setState({
        selectedOption: event.target.value
      });
    }

    // On file select (from the pop up) 
    onFileChange = event => { 
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
      // Create an object of formData 
      const formData = new FormData(); 
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
      // Request made to the backend api 
      // Send formData object 
      axios.post("api/uploadfile", formData); 
    }; 
     

    render() { 
      return ( 

        <div id="container">

          <h1>PDF Comparison Tool</h1>
          <h3>Select comparison option: &nbsp;

          <select name="comparison" id="comparison" onChange={this.onOptionChange}>
            <option hidden disabled selected value> -- select an option -- </option>
            <option value="file">File-to-File</option>
            <option value="folder">Folder-to-Folder</option>
            <option value="server">Server-based</option>
          </select></h3>

          { this.state.selectedOption === 'file' && <UploadFile /> }
          { this.state.selectedOption === 'folder' && <UploadFolder /> }
          { this.state.selectedOption === 'server' && <ServerBased /> }
      
        </div>

      ); 
    } 
  } 
  
  export default App; 