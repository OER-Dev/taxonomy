import { toplevel } from '../../../data/toplevel'

export default function handler(req, res) {
    res.status(200).json(toplevel)
}