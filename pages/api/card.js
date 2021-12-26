import fs from 'fs';
import Cards from './cardInfo.json';
import Info from './info.json';

const handler = async (req, res) => {
    const { method, body } = req;

    console.log('method', method);

    switch (method) {
        case 'GET':
            try {
                res.status(200).json({
                    success: true,
                    data: Cards,
                    totalPrice: Info,
                });
            } catch (err) {
                res.status(400).json({ success: false });
            }
            console.log('get');
            break;
        case 'PUT':
            try {
                const newData = {
                    heart: body.heart ? (Info.heart += 1) : Info.heart,
                    cart: body.cart ? (Info.cart += body.cart) : Info.cart,
                };

                const data = JSON.stringify(newData);

                fs.writeFile('./pages/api/info.json', data, (err) => {
                    if (err) throw err;
                    console.log('JSON data is saved!');
                });

                console.log('Putting');
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
