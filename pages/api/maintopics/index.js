import { resources } from '../../../data/maintopics'

export default function handler(req, res) {
    res.status(200).json(resources)
}