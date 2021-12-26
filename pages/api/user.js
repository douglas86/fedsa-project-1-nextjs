import fs from 'fs';
import info from './info.json';

const handler = async (req, res) => {
    const { method, body } = req;

    switch (method) {
        case 'POST':
            try {
                let data = fs.readFileSync(info);
                let myObject = JSON.parse(data);

                myObject.push(body);

                let newData = JSON.stringify(myObject);
                fs.writeFile(info, newData, (err) => {
                    if (err) throw err;
                    console.log('New data added');
                });

                // fs.writeFile(
                //     './pages/api/info.json',
                //     JSON.stringify(body),
                //     (err) => {
                //         if (err) throw err;
                //         res.status(200).json({
                //             success: true,
                //             message: 'Data saved successfully!',
                //         });
                //     }
                // );
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
