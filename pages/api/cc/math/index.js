import { ccmath } from '../../../../ccmath'

export default function handler(req, res) {
    res.status(200).json(ccmath)
}