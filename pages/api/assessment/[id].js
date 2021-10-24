import { assessment } from '../../../data/assessment'

export default function handler({ query: { id } }, res) {
    const filtered = assessment.filter((trials) => trials.assessment == id)

    if (filtered.length > 0) {
        res.status(200).json(filtered)
    } else {
        res
            .status(404)
            .json({ message: `Content with id of ${id} is not found` })
    }
}