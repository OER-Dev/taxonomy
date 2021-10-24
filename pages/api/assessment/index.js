import { assessment } from '../../../data/assessment'

export default function handler(req, res) {
    res.status(200).json(assessment)
}