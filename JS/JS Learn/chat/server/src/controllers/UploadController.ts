import express from 'express'
import {UploadFileModel} from '../models'


class UploadController {
  create = async (req: any, res: express.Response) => {
    try {
      const user = req.user.user._id
      const file = {
        filename: req.file.originalname,
        size: req.file.size,
        url: req.file.path,
        user,
      }
      const uploadFile = new UploadFileModel(file)
      await uploadFile.save()
      return res.json({file:uploadFile})
    } catch (e) {
      console.log(e)
      return res.status(500).send('error')
    }
  }

  delete = async (req: any, res: any) => {

  }
}

export default UploadController