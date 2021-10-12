import { topix } from '../../../data/topix'

export default function handler(req, res) {
    res.status(200).json(topix)
}