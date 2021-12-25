import Cards from './cardInfo.json';

const handler = async (req, res) => {
    const { method, body } = req;

    switch (method) {
        case 'GET':
            try {
                res.status(200).json({ success: true, data: Cards });
            } catch (err) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ message: 'Resource not found' });
            break;
    }
};

export default handler;
