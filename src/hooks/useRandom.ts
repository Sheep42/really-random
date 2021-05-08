import { useState } from 'react';
import { roll } from '../api/random';

export default () => {

    const [errorMsg, setErrorMsg] = useState( '' );
    const [result, setResult] = useState<Array<Number>>( [] );

    const generateRandom = async ( min: Number, max: Number, amt: Number ) => {

        setErrorMsg( '' );

        try {

            const res = await roll( min, max, amt );

            setResult( [...res.data.result.random.data, ...result] );
        
        } catch( err ) {

            console.log( err );
            setErrorMsg( 'Encountered an error, please try again' );

            setResult( [] );

        }
        
    };


    const clearResult = () => {

        setResult( [] );

    }

    return [ generateRandom, clearResult, result, errorMsg ] as const;

};