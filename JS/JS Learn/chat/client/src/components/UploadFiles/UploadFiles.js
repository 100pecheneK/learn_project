import React from 'react'
import {Modal, Upload} from 'antd'


const UploadFiles = ({fileList}) => {
  return (
    <div className="clearfix">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
      >

      </Upload>
      {/*<Modal*/}

      {/*>*/}
      {/*  <img src="" alt=""/>*/}
      {/*</Modal>*/}
    </div>
  )
}

export default UploadFiles
