'use client'
import React, { useState } from 'react';

import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Pond = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="App">
      <FilePond
        files={files}
        allowMultiple={true}
        maxFiles={4}
        server="/api"
        onupdatefiles={setFiles}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}

export { Pond };
