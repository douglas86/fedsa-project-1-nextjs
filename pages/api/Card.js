export default function handler(req, res) {
    const { method, body } = req;

    switch (method) {
        case 'GET':
            console.log('This is a get method');
        default:
            res.status(400).json({ message: 'Resource not found' });
    }
}
