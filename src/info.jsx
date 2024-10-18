import { useParams } from 'react-router-dom';
require('dotenv').config()

function Info() {
    const { name } = useParams();
    console.log(process.env.REACT_APP_API_KEY);

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold mb-4">{name.replace(/-/g, ' ')}</h1>
            <p>More details about {name.replace(/-/g, ' ')} will be shown here.</p>
        </div>
    );
}

export default Info;