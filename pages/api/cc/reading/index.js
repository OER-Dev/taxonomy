import { ccreading } from '../../../../ccreading'

export default function handler(req, res) {
    res.status(200).json(ccreading)
}