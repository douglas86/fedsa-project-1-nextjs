import info from './info.json';

const handler = async (req, res) => {
    const { method, body } = req;

    switch (method) {
        case 'POST':
            try {
                console.log('body', body);
                res.status(200).json({
                    success: true,
                    data: info,
                });
            } catch (err) {
                res.status(400).json({
                    success: false,
                    message: 'Data not found',
                });
            }
            break;
        default:
            res.status(400).json({ message: 'Resource not found' });
            break;
    }
};

export default handler;
