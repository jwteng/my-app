import React from 'react';
import './upload.css';

class UploadFolder extends React.Component {

    render(){
        return( 
        <div>
            -------Folder to Folder Comparison-------
            <input type="file" webkitdirectory mozdirectory directory />

        </div> 
        )
    }

}

export default UploadFolder;